Diagnosis TA
============
Created at International Development Hackathon 2014. Mobile friendly web application that trains third world physician on giving correct diagnosis and prescriptions.

Setup
-----
Run these commands:  
virtualenv obz  
pip install -r requirements.txt  
./app.py (may have to chmod to execute)  
sqlite3 test.db < schema.sql

Test
----
curl localhost:5000; echo  
curl -d "diagnosis=Flu&prescription=Acetaminophen" localhost:5000; echo
