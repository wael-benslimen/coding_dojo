from flask_app import app
from flask import Flask, render_template, redirect, request,session
from flask_app.models.users import User


@app.route('/')          
def info_display():
    all_Users = User.get_all()
    return render_template('data.html', all_users = all_Users)


@app.route('/form')
def form():
    return render_template('form.html')
    
@app.route('/treat_info', methods = ['POST'])
def treat_info():
    resault = request.form
    User.create(resault)
    return redirect('/')