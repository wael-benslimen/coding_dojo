from flask_app.models.users import User
from flask import render_template, redirect, request
from flask_app import app

@app.route('/')
def index():
    # * to get the users
    all_users = User.get_all()
    all_friends = User.get_joined()
    return render_template('index.html', all_users = all_users, all_friends = all_friends)


@app.route('/add_user', methods = ['POST'])
def add_user():
    User.create(request.form)
    return redirect('/')

@app.route('/add_friend', methods = ['POST'])
def add_friend():
    print('*'*100)
    print(request.form)
    User.create_friendship(request.form)
    return redirect('/')