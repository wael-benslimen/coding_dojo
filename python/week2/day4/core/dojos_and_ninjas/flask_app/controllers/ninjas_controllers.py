from flask_app import app
from flask import Flask,render_template, redirect, request, session
from flask_app.models.dojos import Dojo
from flask_app.models.ninjas import Ninja




@app.route('/add_ninja')
def ninja_form():
    resault = Dojo.get_all()
    return render_template('create_ninja.html', all_dojos = resault)


@app.route('/create_ninja', methods = ['POST'])
def create_ninja():
    form_resaults = request.form
    session['id'] = request.form['dojo']
    print(form_resaults)
    Ninja.create_one(form_resaults)
    return redirect('/show_ninjas')



@app.route('/show_ninjas')
def show_ninjas():
    all_ninjas = Ninja.get_all_by_dojo_id(session['id'])
    dojo = Dojo.get_one(session['id'])
    return render_template('ninjas.html', all_ninjas = all_ninjas, dojo_name = dojo[0]['name'])


@app.route('/show_dojo_ninjas/<int:id>')
def dojo_ninjas(id):
    all_ninjas = Ninja.get_all_by_dojo_id(id)
    dojo = Dojo.get_one(id)
    return render_template('ninjas.html', all_ninjas = all_ninjas, dojo_name = dojo)