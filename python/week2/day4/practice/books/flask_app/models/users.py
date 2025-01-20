from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import db

class User():
    def __init__(self, data):
        self.id = data['ID']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.created_at= data['created_at']
        self.updated_at= data['updated_at']
    
    
    @classmethod   
    def get_all(cls):
        query = 'select * from users'
        resault = connectToMySQL(db).query_db(query)
        user = []
        for item in resault:
            user.append(cls(item))
        return user
        
        
    @classmethod
    def create_one(cls, data):
        query = 'insert into users(first_name, last_name) values (%(first_name)s, %(last_name)s)'
        resault = connectToMySQL(db).query_db(query, data)
        return resault