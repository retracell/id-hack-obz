#!obz/bin/python
from flask import Flask, g, request, jsonify, make_response, current_app
from functools import update_wrapper
from datetime import timedelta

import sqlite3

app = Flask(__name__)
DATABASE = 'test.db'

def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator

def connect_db():
    return sqlite3.connect(DATABASE)

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = connect_db()
    return db

@app.route('/')
@crossdomain(origin='*')
def index():
    return "API Landing Page"

#assume all patients are created beforehand
@app.route('/symptoms', methods = ['POST'])
@crossdomain(origin='*')
def get_diagnosis():
    db = get_db()
    name = request.form['name']
    symptoms = request.form['symptoms'].strip().split(',')
    for symptom in symptoms:
        test = db.execute("insert into pat2sym values (?, ?);", (name, symptom))
    #select name doesn't work.. will use select * for now
    cur = db.execute("select * from diagnosis;")
    db.commit()
    result = cur.fetchall()
    return jsonify(result)

@app.route('/diagnose', methods = ['POST'])
@crossdomain(origin='*')
def get_prescription():
    db = get_db()
    name = request.form['name']
    diagnosis = request.form['diagnosis']
    db.execute("insert into pat2dia values (name, diagnosis);")
    cur = db.execute("select name from prescription;")
    result = cur.fetchall()
    cur = db.execute("select prescription_name from dia2pre where diagnosis_name=?;", (diagnosis,))
    recommended = cur.fetchone()
    return jsonify({'result':result, 'recommended':recommended})

@app.route('/verify', methods = ['POST'])
@crossdomain(origin='*')
def verify():
    diagnosis = request.form['diagnosis']
    prescription = request.form['prescription']
    db = get_db()
    cur = db.execute(
        "select * from dia2pre where diagnosis_name=? and prescription_name=?;",
        (diagnosis, prescription))
    
    result = cur.fetchall()
    if result is not None:
        return jsonify( {'result': 'ok'} )
    else:
        alert_msg = "Cannot treat " + diagnosis + " using " + prescription
        return jsonify ( {'result': 'error', 'alert': alert_msg} )

if __name__ == '__main__':
    app.run()
