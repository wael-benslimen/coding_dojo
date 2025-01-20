from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import DB, EMAIL_REGEX
from flask import flash

class Email:
    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    
    
    
    @classmethod    
    def create(cls, data):
        query = 'insert into table1(email) values(%(email)s)'
        return connectToMySQL(DB).query_db(query,data)
    
    
    @classmethod
    def get_all(cls):
        query = 'select * from table1;'
        resault = connectToMySQL(DB).query_db(query)
        all_items = []
        for item in resault:
            all_items.append(cls(item))
        return all_items
    
    

    
    @staticmethod
    def validate_emai(data):
        is_valid = True
        if not EMAIL_REGEX.match(data['email']):
            is_valid = False
            flash('email not valid')
        return is_valid
            
            
            