from flask import render_template, redirect, session, request
from flask_app.models.expences import Expence
from flask_app import app


@app.route('/')
@app.route('/expences')
def dashboard():
    all_expences = Expence.get_all()
    return render_template('dashboard.html', all_expences = all_expences)

@app.route('/expences/new')
def new_expence():
    return render_template('create_expence.html')

@app.route('/create_expence', methods = ['POST'])
def create_form():
    Expence.create(request.form)
    return redirect('/expences')

@app.route('/expences/show/<int:id>')
def show_one(id):
    expence = Expence.get_one_id({'id': id})
    return render_template('/show_one.html', expence = expence)

@app.route('/expences/edit/<int:id>')
def edit_item(id):
    expence = Expence.get_one_id({'id': id})
    return render_template('edit.html', expence = expence)

# @app.route('/edit_')