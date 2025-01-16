from flask_app import db
from flask_app.config.mySQLConnection import connectToMySQL
class User:
    def __init__(self, data):
        self.id = data['ID']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
    
    
    
    
    @classmethod
    def get_all(cls):
        query = "select * from users;"
        result = connectToMySQL(db).query_db(query)
        users = []
        for user in result:
            users.append( cls(user) )
        return users
    
    @classmethod
    def get_one(cls, id):
        query = "select * from users where ID = %(id)s;"
        result = connectToMySQL(db).query_db(query,{'ID': id})
        return result
        
    
    @classmethod
    def create(cls, data):
        query = "insert into users(first_name, last_name, email) values (%(first_name)s, %(last_name)s, %(email)s)"
        result = connectToMySQL(db).query_db(query, data)
        return result



    @classmethod
    def delete(cls, id):
        query = "delete from users where id = %(id)s;"
        data = {
            'id' : id
        }
        resault = connectToMySQL(db).query_db(query, data)
        
        
        
        
    @classmethod
    def update(cls, id):
        query = "update users set first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s where id = %(id)s;"
        data = {
            'id': id
        }
        resault = connectToMySQL(db).query_db(query,data)
        return resault
