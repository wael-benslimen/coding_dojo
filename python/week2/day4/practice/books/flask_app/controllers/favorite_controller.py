from flask import Flask, session, render_template, redirect, request
from flask_app.models.books import Book
from flask_app.models.users import User
from flask_app.models.favorites import Favorite
from flask_app import app


@app.route('/author_faves/<int:id>')
def show_faves(id):
    all_joined_info = Favorite.get_liked_values(id)
    author = User(all_joined_info[0])
    arr_of_books = []
    for item in all_joined_info:
        book = Book(item)
        arr_of_books.append(book)
    all_books = Book.get_all()
    
    return render_template('author_fav.html', author = author, fave_books = arr_of_books, all_books = all_books)


@app.route('/create_fav_book', methods = ['POST'])
def create_faves():
    data = request.form
    id = request.form['user_id']
    Favorite.add_one(data)
    return redirect(f'/author_faves/{id}')

@app.route('/fav_book/<int:id>')
def fave_books(id):
    all_joined_info = Favorite.get_fav_books(id)
    
    book = Book(all_joined_info[0])
    arr_of_all_users = []
    for item in all_joined_info:
        user = User(item)
        arr_of_all_users.append(user)
        
    all_authors = User.get_all()
    return render_template('book_fav.html', book = book, all_authors = arr_of_all_users, authors = all_authors)

@app.route('/add_to_fave', methods = ['POST'])
def treat_faves():
    Favorite.add_one(request.form)
    id = request.form["book_id"]
    return redirect(f'/fav_book/{id}')