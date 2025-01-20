from flask import Flask, session, render_template, redirect, request
from flask_app.models.users import User
from flask_app import app

@app.route('/authors')
def show_authors():
    all_authors = User.get_all()
    return render_template('author.html', all_authors = all_authors) 




@app.route('/new_author', methods = ['POST'])
def create_author():
    data = request.form
    User.create_one(data)
    return redirect('/')