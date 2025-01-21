from flask_app.config.mySQLConnection import connectToMySQL
from flask_app import DB
from flask import flash

class Recepie:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_of_creation = data['date_of_creation']
        self.under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        
        
    @classmethod
    def get_all_joined(cls):
        query = """select recepies.id, name, under_30, users.first_name, user_id from recepies
        join users on users.id = recepies.user_id"""
        resault = connectToMySQL(DB).query_db(query)
        all_items = []
        for item in resault:
            all_items.append(item)
        return all_items
    
    @classmethod 
    def create(cls, data):
        query = 'insert into recepies(name, description, instructions,under_30 ,user_id, date_of_creation) values (%(name)s, %(description)s, %(instructions)s, %(under_30)s, %(user_id)s, %(date_of_creation)s)'
        return connectToMySQL(DB).query_db(query, data)

    @classmethod
    def get_one(cls, id):
        query = 'select recepies.id,name, under_30, users.first_name, description, instructions, date_of_creation from recepies join users on users.id = recepies.user_id where recepies.id = %(id)s;'
        data = {
            'id': id
        }
        return connectToMySQL(DB).query_db(query, data)[0]

    @classmethod
    def get_rid_of(cls, id):
        query = 'delete from recepies where id = %(id)s'
        return connectToMySQL(DB).query_db(query, {'id' : id})
    
    @classmethod
    def change(cls, data):
        query = 'update recepies set  recepies.name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_of_creation = %(date_of_creation)s, under_30 = %(under_30)s where recepies.id = %(id)s '
        print('hi'*20)
        return connectToMySQL(DB).query_db(query, data)


    @staticmethod
    def check_recepies(data):
        is_valid = True
        print("*"*100)
        print(data.get('under_30'))
        if len(data['name']) < 2:
            flash("name should be more than 3 chars", 'recepies')
            is_valid = False 
        if len(data['description']) < 2:
            flash("description should be more than 3 chars", 'recepies')
            is_valid = False  
        if len(data['instructions']) < 2:
            flash("instructions should be more than 3 chars", 'recepies')
            is_valid = False  
        if len(data['date_of_creation']) == 0:
            flash("the date of creation is required", 'recepies')
            is_valid = False
        if data.get('under_30') == None:
            flash("under 30 min is reqired", 'recepies')
            is_valid = False
        return is_valid         
    


