from flask import Flask, session 
app = Flask(__name__)  
app.secret_key = 'shhhhhh'
db = 'books_sql'
