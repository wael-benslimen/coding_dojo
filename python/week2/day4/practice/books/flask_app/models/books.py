class Book:
    def __init__(self, data):
        self.id = data['ID']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        
        
    
        