from flask import render_template, redirect, request, session, flash
from flask_app.models.users import User
from flask_app import app, bcrypt

    
@app.route('/')
def login_register():
    return render_template('login_registration.html')
    
@app.route('/register', methods = ['POST'])
def registration_form():
    if User.check_registration(request.form):
        if User.get_one_email(request.form) == False :
            data = {
                **request.form
            }
            data['password'] = bcrypt.generate_password_hash(request.form['password'])
            session['id'] = User.create(data)
        else:
            flash('email already in system', 'register')
            return redirect('/')
        return redirect('/shows')
    else: 
        
        return redirect('/')


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
            return redirect('/shows')
    else:
        flash('password or email incorrect', 'login')
        return redirect('/') 
    

@app.route('/logout', methods = ['POST'])
def logout():
    session.clear()
    return redirect('/')