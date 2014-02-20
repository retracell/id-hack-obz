id-hack-obz
============

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
