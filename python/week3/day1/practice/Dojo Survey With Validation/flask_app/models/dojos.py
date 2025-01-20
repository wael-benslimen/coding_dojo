from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import DB
from flask import flash

class Dojo:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.location = data["location"]
        self.lang = data["lang"]
        self.comment = data["comment"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        
        
    @classmethod
    def get_one(cls, id):
        query = 'SELECT * FROM dojos where id = %(id)s;'
        resault  = connectToMySQL(DB).query_db(query,{"id": id})
        return resault[0]
            
            
    @classmethod
    def create(cls, data):
        query = 'insert into dojos(name, location, lang, comment) values(%(name)s, %(location)s, %(lang)s, %(comment)s)'
        return connectToMySQL(DB).query_db(query, data)
            
            
            
            
            
            
            
            
            
            
            
            
    @staticmethod
    def validate_form(data):
        is_valid = True
        if len(data['name']) < 3:
            flash('name must be more than 3 chars', 'error_name')
            is_valid = False
        if data['location'] == 'none':
            flash('you must choose a location', 'error_location')
            is_valid = False
        if data['lang'] == 'none':
            flash('you must choose a fav language', 'error_lang')
            is_valid = False
        if len(data['comment']) < 3 :
            flash('comment needs to be at least 3 chars', 'error_comment')
            is_valid = False
        return is_valid
    