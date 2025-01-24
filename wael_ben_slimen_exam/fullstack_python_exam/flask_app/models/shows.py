from flask_app.config.mySQLConnection import connectToMySQL
from flask import flash
from flask_app import DB


class Show:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.network = data['network']
        self.release_date = data['release_date']
        self.comments = data['comments']
        self.user_id = data['user_id']
        self.user_name = ''
        self.first_name = ''
        
        
    @classmethod
    def create(cls, data):
        query = 'insert into shows(title, network, release_date, comments, user_id) values(%(title)s, %(network)s, %(release_date)s, %(comments)s, %(user_id)s)'
        
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def get_all(cls):
        query = 'select * from shows;'
        resault = connectToMySQL(DB).query_db(query)
        arr = []
        for item in resault:
            arr.append(cls(item))
        return arr
    
    @classmethod
    def get_one(cls, data):
        query = 'select * from shows join users on users.id = shows.user_id where shows.id = %(id)s;'
        resault = connectToMySQL(DB).query_db(query, data)
        show = cls(resault[0])
        show.user_name = resault[0]['first_name']+' '+resault[0]['last_name']
        show.first_name = resault[0]['first_name']
        return show
    
    @classmethod
    def get_one_id(cls, data):
        query = 'select * from shows where shows.id = %(id)s;'
        resault = connectToMySQL(DB).query_db(query, data)
        show = cls(resault[0])
        return show
    
    
    @classmethod
    def update(cls, data):
        query = 'update shows set title = %(title)s, network = %(network)s, release_date = %(release_date)s, comments = %(comments)s where id = %(id)s'
        return connectToMySQL(DB).query_db(query, data)
        
    @classmethod
    def delete(cls, data):
        query = 'delete from shows where id = %(id)s'
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def get_by_title(cls, data):
        query = 'select * from shows where title = %(title)s;'
        resault = connectToMySQL(DB).query_db(query, data)
        if resault:
            return cls(resault[0])
        else:
            return False
    
    @staticmethod
    def validate_show(data):
        is_valid = True
        if len( data['title'] )< 3:
            flash('title must be atleast 3 charachters long', 'title')
            is_valid = False
        if len(data['network']) < 3:
            flash('network must be atleast 3 charachters long', 'network')
            is_valid = False
        if len(data['comments']) < 3:
            flash('comments must be atleast 3 charachters long', 'comments')
            is_valid = False
        if data['release_date'] == '':
            flash('release date is required', 'release_date')
            is_valid = False
        return is_valid
    
    
    

        
            
    