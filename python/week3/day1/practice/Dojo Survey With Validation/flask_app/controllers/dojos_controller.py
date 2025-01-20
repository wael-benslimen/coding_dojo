from flask_app.models.dojos import Dojo
from flask_app import app
from flask import render_template, redirect, request, session


@app.route('/')
def survey():
    return render_template('survey.html')


@app.route('/form', methods = ['POST'])
def form_tratment():
    if not Dojo.validate_form(request.form) :
        return redirect('/')
    resault = Dojo.create(request.form)
    session['id'] = resault
    return redirect('/info')


@app.route('/info')
def show_info():
    users = Dojo.get_one(session["id"]) 
    print(users) 
    return render_template('show_all.html', users = users)