from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import db


class Book:
    def __init__(self, data):
        self.id = data['ID']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at*']
        
        
    @classmethod   
    def get_all(cls):
        query = 'select * from books'
        resault = connectToMySQL(db).query_db(query)
        books = []
        for item in resault:
            books.append(cls(item))
        return books
        
        
        
    @classmethod
    def create_one(cls, data):
        query = 'insert into books(title, num_of_pages) values (%(title)s, %(num_of_pages)s)'
        resault = connectToMySQL(db).query_db(query, data)
        return resault
    