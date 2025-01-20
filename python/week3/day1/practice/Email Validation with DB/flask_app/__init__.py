from flask import Flask, session 
import re
app = Flask(__name__)  
app.secret_key = 'qsdfghjkl'
DB = "email_validation_db"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

