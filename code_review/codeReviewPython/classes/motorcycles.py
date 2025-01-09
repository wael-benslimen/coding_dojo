from .vehicules import Vehicule

class Motorcycle(Vehicule):
    def __init__(self, make, model, owner):
        super().__init__(make, model, owner)
        
        
        
    def display_info(self):
        return f"{self.make}, {self.model}, {self.owner} this is a motorcycle class"
        