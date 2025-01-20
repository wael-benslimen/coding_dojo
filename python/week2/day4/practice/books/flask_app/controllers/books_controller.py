from flask import Flask, session, render_template, redirect, request
from flask_app.models.books import Book
from flask_app import app



@app.route('/')
def main():
    return redirect('/authors')


@app.route('/books')
def show_books():
    all_books = Book.get_all()
    return render_template('book.html', all_books = all_books)



@app.route('/new_book', methods = ['POST'])
def create_book():
    data = request.form
    Book.create_one(data)
    return redirect('/books')



    