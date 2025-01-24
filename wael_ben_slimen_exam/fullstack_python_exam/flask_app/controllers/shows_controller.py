from flask import render_template, redirect, request, session, flash
from flask_app.models.users import User
from flask_app.models.shows import Show
from flask_app.models.comments import User_comments
from flask_app import app



@app.route('/shows')
def shows():
    if not 'id' in session:
        return redirect('/')
    user = User.get_one_id({'id' : session['id']})
    all_shows = Show.get_all()
    return render_template('shows.html', all_shows = all_shows, user = user)


@app.route('/shows/new')
def create_show():
    if not 'id' in session:
        return redirect('/')
    return render_template('create_show.html', data = {})
    
    
@app.route('/shows/form', methods = ['POST'])
def new_show():
    if not 'id' in session:
        return redirect('/')
    if not Show.validate_show(request.form):
        return render_template('create_show.html', data = {**request.form})
    print('*'*100)
    data = {
        **request.form
    }
    if Show.get_by_title({'title' : data['title']}) != False:
        flash('title must be unique', 'title')
        return render_template('create_show.html', data = {**request.form})
    Show.create(request.form)
    return redirect('/shows')


@app.route('/shows/<int:id>')
def show_details(id):
    if not 'id' in session:
        return redirect('/')
    show = Show.get_one({'id' : id})
    all_comments = User_comments.get_all_comments()
    return render_template('show_details.html', show = show, all_comments = all_comments)


@app.route('/shows/edit/<int:id>')
def edit(id):
    if not 'id' in session:
        return redirect('/')
    show = Show.get_one({'id' : id})
    return render_template('edit.html', show = show)

@app.route('/shows/form/edit', methods = ['POST'])
def update():
    if not 'id' in session:
        return redirect('/')
    if not Show.validate_show(request.form):
        return render_template('edit.html', show = {**request.form})
    Show.update(request.form)
    return redirect('/shows')


@app.route('/delete/<int:id>', methods = ['POST'])
def delete(id):
    Show.delete({'id' : id})
    return redirect('/shows')
            
@app.route('/comment/form', methods = ['POST'])
def create_user_comment():
    data = {
        **request.form
    }
    if data['user_id'] == session['id']:
        flash('you cant comment on your own post')
        return redirect(f'/shows/{data['show_id']}')
    User_comments.add_comment(data)
    return redirect(f'/shows/{data['show_id']}')


@app.route('/delete_comment/<int:id>', methods = ['POST'])
def delete_comment(id):
    data = {
        **request.form
    }
    User_comments.delete_comment({'id' : id})
    return redirect (f'/shows/{data['show_id']}')