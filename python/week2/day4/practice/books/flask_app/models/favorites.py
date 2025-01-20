from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import db



class Favorite():
    def __init__(self, data):
        self.user_id = data['user_ID']
        self.book_id = data['book_ID']
        
        
    @classmethod
    def get_liked_values(cls, id):
        query = """SELECT * FROM users left JOIN favorites ON users.ID = favorites.user_ID left JOIN books ON favorites.book_ID = books.ID WHERE users.ID = %(id)s;"""
        data = {
            'id' : id
        }
        resault = connectToMySQL(db).query_db(query, data)
        return resault
    
    
    @classmethod
    def add_one(cls, data):
        query ='insert into favorites (user_ID, book_ID) values (%(user_id)s, %(book_id)s)'
        resault = connectToMySQL(db).query_db(query, data)
        
        
    @classmethod
    def get_fav_books(cls, id):
        query = """SELECT * FROM books left JOIN favorites ON books.ID = favorites.book_ID left JOIN users ON favorites.user_ID = users.ID WHERE books.ID = %(id)s;"""
        data = {
            'id' : id
        }
        resault = connectToMySQL(db).query_db(query, data)
        return resault
    