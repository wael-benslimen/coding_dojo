from flask_app.models.emails import Email
from flask import render_template, redirect, session, request
from flask_app import app


@app.route('/')
def index():
    return render_template('email.html')


@app.route('/form', methods = ['POST'])
def treat_form():
    if not Email.validate_emai(request.form):
        return redirect('/')
    email = Email.create(request.form)
    return redirect('/show')



@app.route('/show')
def show_all_emails():
    all_items = Email.get_all()
    return render_template('show_all.html', all_items = all_items)


