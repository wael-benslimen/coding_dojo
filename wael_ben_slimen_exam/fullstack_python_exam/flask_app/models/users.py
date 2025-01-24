from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import DB, EMAIL_REGEX, bcrypt
from flask import flash


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def create(cls, data):
        query = 'insert into users(first_name, last_name, email, password) values(%(first_name)s, %(last_name)s, %(email)s, %(password)s)'
        return connectToMySQL(DB).query_db(query, data)
    
    
    @classmethod
    def get_one_email(cls, data):
        query = 'select * from users where email = %(email)s'
        resault = connectToMySQL(DB).query_db(query, data)
        if resault:
            return resault[0]
        else:
            return False
        
    @classmethod
    def get_one_id(cls,id):
        query = 'select * from users where id = %(id)s'
        result = connectToMySQL(DB).query_db(query,id)
        return result[0]
    
    @staticmethod
    def check_registration(data):
        is_valid = True
        if not data['first_name'].isalpha() or len(data['first_name']) < 2 :
            flash('first name need to be only letters and has more than 2 chars', 'register')
            is_valid = False
        if not data['last_name'].isalpha() or len(data['last_name']) < 2:
            flash('last name need to be only letters and has more than 2 chars', 'register')
            is_valid = False
        if not EMAIL_REGEX.match(data['email']):
            flash("invalid email address!", 'register')
            is_valid = False
        if len(data['password']) < 8:
            flash('password needs to be at least 8 chars long', 'register')
            is_valid = False
        if data['password'] != data['password_conf']:
            flash ('password confirmation isn t maching', 'register')
            is_valid = False
        return is_valid
    
    
    @staticmethod
    def check_password(data):
        if not bcrypt.check_password_hash(data['hash_pass'], data["pass"]):
            return False
        return True
            
        
        