from moduals.pets import Pet
class Ninja:
    def __init__(self,first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    
    def print_info(self):
        print(f"ninja name : {self.first_name} \n pet type: {self.pet.display_type()} \n{self.pet.print_pet_info()} ")
    
    def walk(self):
        self.pet.play()
        return self
    
    def feed(self):
        self.pet.eat()
        return self
    def bathe(self):
        self. pet.noise()
        return self


        
        