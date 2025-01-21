from flask import Flask, session
from flask_bcrypt import Bcrypt
import re
app = Flask(__name__)
app.secret_key = 'shuuuu'
DB = 'recepies'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
bcrypt = Bcrypt(app)