from flask import Flask, session
import re
from flask_bcrypt import Bcrypt
app = Flask(__name__)  
app.secret_key = 'dcfvbnjkl'
DB = "fullstack_python_exam"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
bcrypt = Bcrypt(app)
