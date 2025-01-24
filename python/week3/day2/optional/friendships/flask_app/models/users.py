from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import DB


class User:
    def __init__(self, data):
         self.id = data['id']
         self.username = data['username']
         self.email = data['email']
         self.created_at = data['created_at']
         self.updated_at = data['updated_at']
         self.friends = []
         
    @classmethod
    def create(cls, data):
        query = 'insert into users(username, email) values(%(username)s, %(email)s)'
        return connectToMySQL(DB).query_db(query, data)
    
    
    @classmethod
    def create_friendship(cls, data):
        query = 'insert into friends(user_id, friend_id) values(%(user_id)s, %(friend_id)s)'
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def get_all(cls):
        query = 'SELECT * FROM friendships.users;'
        resault = connectToMySQL(DB).query_db(query)
        arr = []
        for item in resault:
            arr.append(cls(item))
            
        return arr
    
    
    @classmethod
    def get_joined(cls):
        query = """select * from users 
    join friends on users.id = friends.user_id
    join users as friendships on friends.friend_id = friendships.id;"""
        resault = connectToMySQL(DB).query_db(query)
        if resault :
            arr = []
            for item in resault:
                print(item)
                arr.append(cls(item))
            return arr
        else:
            return False
                
    