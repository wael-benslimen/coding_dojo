from flask_app.config.mySQLConnection import connectToMySQL
from flask import flash
from flask_app import DB


class User_comments:
    def __init__(self, data):
        self.id = data['user_comments.id']
        self.user_id = data['user_id']
        self.show_id = data['show_id']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_name = ''


    @classmethod
    def add_comment(cls, data):
        query = 'insert into user_comments(user_id, show_id, comment) values (%(user_id)s, %(show_id)s, %(comment)s)'
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def get_all_comments(cls):
        query = """select * from users
        join user_comments on users.id = user_comments.user_id
        join shows on user_comments.show_id = shows.id;"""
        resault = connectToMySQL(DB).query_db(query)
        if resault:
            arr = []
            for item in resault:
                print(item)
                data = {
                    **item,
                    'user_name' : item['first_name']
                }
                arr.append(cls(data))
            return arr
        else:
            return False
        
        
    @classmethod
    def delete_comment(cls, data):
        query = 'delete from user_comments where id = %(id)s'
        return connectToMySQL(DB).query_db(query, data)