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


@app.route('/delete/<int:id>')
def remove_item(id):
    User.delete(id)
    return redirect('/')

@app.route('/edit/<int:id>')
def view_edit(id):
    data = {
        'id': id
    }
    return render_template('update.html', one_user =  User.get_one(data))



@app.route('/update', methods = ['POST'])
def update_user():
    form = request.form
    print("*"*80)
    print(form)
    User.update_users(form)
    return redirect('/')


@app.route('/show/<int:id>')
def show_one(id):
    data = {
        'id': id
    }
    return render_template ('show_one.html',user =  User.get_one(data))