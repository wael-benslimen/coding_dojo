from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import db


class Ninja:
    def __init__(self, data):
        self.id = data["ID"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.fage= data["age"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        
    @classmethod
    def create_one(cls, data):
        query = 'insert into ninjas(first_name, last_name, age, dojos_ID) values (%(first_name)s, %(last_name)s, %(age)s, %(dojo)s)'
        resault = connectToMySQL(db).query_db(query, data)
        return resault
    
    
    @classmethod
    def get_all_by_dojo_id(cls, id):
        dojo = {
            'id' : id
        }
        query = 'select * from ninjas where dojos_ID = %(id)s'
        resault = connectToMySQL(db).query_db(query, dojo)
        return resault
    
    