from flask import render_template, redirect, request, session
from flask_app.models.users import User
from flask_app.models.recepies import Recepie
from flask_app import app


@app.route('/recepies')
def show_recepies():
    if 'id' in session:
        user = User.get_one_id(session['id'])
        all_recepies = Recepie.get_all_joined()
    else:
        return redirect('/')
    return render_template('recepies.html', user = user, all_recepies = all_recepies)

@app.route('/new_recepie')
def create_recepie():
    if 'id' in session:
        return render_template('recepie_create.html')
    else:
        return redirect('/')


@app.route('/create_recepie', methods = ['POST'])
def add_recepie():
    if not Recepie.check_recepies(request.form):
       return redirect('/new_recepie')
    data = {
        **request.form,
        'user_id' : session['id']
    }
    Recepie.create(data)
    return redirect('/recepies')


@app.route('/recepies/<int:id>')
def show_one_recepie(id):
    if not 'id' in session:
        return('/')
    user = User.get_one_id(session['id'])
    recepie = Recepie.get_one(id)
    print(recepie)
    return render_template('/show_recepie.html',user = user, recepie = recepie )


@app.route('/delete/<int:id>')
def destroy(id):
    Recepie.get_rid_of(id)
    return redirect('/recepies')


@app.route('/edit/<int:id>')
def update(id):
    recepie = Recepie.get_one(id)
    return render_template('update.html', recepie = recepie)

@app.route('/update_recepie', methods = ['POST'])
def change_recepie():
    print(request.form)
    data = {
        **request.form
    }
    Recepie.change(data)
    return redirect('/recepies')


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')