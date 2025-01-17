from flask_app import app
from flask import Flask,render_template, redirect, request, session
from flask_app.models.dojos import Dojo



@app.route('/')
def get_first_page():
    return redirect('/dojos')



@app.route('/dojos')
def show_dojos():
    resault = Dojo.get_all()
    return render_template('dojos.html', all_dojos = resault)

@app.route('/create_dojo', methods = ['POST'])
def create_dojo():
    data = request.form
    Dojo.create_one(data)
    return redirect('/dojos')
    