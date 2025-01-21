from flask import render_template, redirect, request, session
from flask_app.models.users import User
from flask_app import app, EMAIL_REGEX, bcrypt


@app.route('/')
def login_register():
    return render_template('login_registration.html')
    
@app.route('/register', methods = ['POST'])
def registration_form():
    if User.check_registration(request.form):
        data = {
            **request.form
        }
        data['password'] = bcrypt.generate_password_hash(request.form['password'])
        session['id'] = User.create(data)
    return redirect('/resault')


@app.route('/login', methods = ["POST"])
def login_form():
    user = User.get_one_email(request.form)
    print("*" *100)
    print(user)
    if user != False:
        data = {
            'pass' : request.form['password'],
            'hash_pass' : user['password']
        }
        if len(data['pass']) != 0:
            print("*" *100)
            print(data)
            if not User.check_password(data) :
                return redirect('/') 
            else:
                session['id'] = user['id']
        else:
            return redirect('/') 
    return redirect('/resault')


@app.route('/resault')
def show_user():
    print("*" *100)
    print(session['id'])
    user = User.get_one_id(session['id'])
    return render_template('resault.html', user = user)
    