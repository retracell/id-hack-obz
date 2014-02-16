#!obz/bin/python
from flask import Flask, g
import sqlite3

app = Flask(__name__)
DATABASE = 'test.db'

def connect_db():
    rv = sqlite3.connect(DATABASE)
    rv.row_factory = sqlite3.Row
    return rv

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = connect_db()
    return db

@app.route('/')
def index():
    db = get_db()
    cur = db.execute('select * from diagnosis')
    diagnosis = cur.fetchall()
    print diagnosis
    return "Some JSON data"

if __name__ == '__main__':
    app.run()
