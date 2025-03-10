from flask import render_template, redirect, request, session, flash
from flask_app.models.users import User
from flask_app import app, bcrypt

    
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
    else:
        return redirect('/')
    return redirect('/resault')


@app.route('/login', methods = ["POST"])
def login_form():
    user = User.get_one_email(request.form)
    if user != False:
        data = {
            'pass' : request.form['password'],
            'hash_pass' : user['password']
        }
        print("*" *100)
        print(data)
        if not User.check_password(data) :
            flash('password or email incorrect', 'login')
            return redirect('/') 
        else:
            session['id'] = user['id']
            return redirect('/resault')
    else:
        flash('password or email incorrect', 'login')
        return redirect('/') 
    


@app.route('/resault')
def show_user():
    if 'id' in session:
        user = User.get_one_id(session['id'])
        return render_template('resault.html', user = user)
    else:
        return redirect('/')
    
    
@app.route('/clear')
def clear():
    session.clear()
    return redirect('/')

    