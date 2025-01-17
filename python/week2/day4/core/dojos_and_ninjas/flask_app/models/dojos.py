from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import db
class Dojo:
    def __init__(self, data):
        self.id = data['ID']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
    @classmethod
    def get_all(cls):
        query = "select * from dojos;"
        resault = connectToMySQL(db).query_db(query)
        dojo_list = []
        for item in resault:
            dojo = cls(item)
            dojo_list.append(dojo)
        return dojo_list
    
    
    
    @classmethod
    def create_one(cls, data):
        query = "insert into dojos(name) values(%(name)s)"
        resault = connectToMySQL(db).query_db(query, data)
        return resault
    
    @classmethod
    def get_one(cls, id):
        data = {
            'id' : id
        }
        query = "select * from dojos where ID = %(id)s;"
        resault = connectToMySQL(db).query_db(query, data)
        return resault


    