class Vehicule:
    # constracter
    def __init__(self, make, model, owner):
        self.make = make
        self.model = model
        self.owner = owner #asign the vehicule s owner the the owner atribute
    
    
    # change the owner of the vehicule
    def update_owner(self, value):
        # change the value of the attribute owner by the value param
        self.owner = value
        
        