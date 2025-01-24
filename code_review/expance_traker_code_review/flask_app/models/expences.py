from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import DB
class Expence:
    def __init__(self, data):
        self.id = data['id']
        self.category = data['category']
        self.description = data['description']
        self.amount = data['amount']
        self.expence_date = data['expence_date']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
        
    @classmethod
    def create(cls, data):
        query = 'insert into expences(category, description, amount, expence_date) values (%(category)s, %(description)s, %(amount)s, %(expence_date)s);'
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod 
    def get_all(cls):
        query = 'select * from expences'
        resault = connectToMySQL(DB).query_db(query)
        arr = []
        for item in resault:
            arr.append(cls(item))
        return arr
    
    @classmethod 
    def get_one_id(cls, id):
        query = 'select * from expences where id = %(id)s'
        resault = connectToMySQL(DB).query_db(query, id)
        return resault[0]
    
    @classmethod
    def update(cls, data):
        query = 'update expences set category = %(category)s, description = %(description)s, amount = %(amount)s, expence_date = %(expence_date)s where id = %(id)s'
        return connectToMySQL(DB).query_db(query, data)
    
    @classmethod
    def remove_item(cls, id):
        query = 'delete from expences where id = %(id)s'
        