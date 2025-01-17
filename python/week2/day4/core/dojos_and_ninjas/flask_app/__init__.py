from flask import Flask,session 
app = Flask(__name__)  
app.secret_key = "keep it safe keep it secret"
db = "dojos_and_ninjas"
