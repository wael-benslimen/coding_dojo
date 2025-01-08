class Pet:
    def __init__(self, name, tricks):
        self.name = name
        self.tricks = tricks
        self.health = 100
        self.energy = 100
    
    def print_pet_info(self):
        return f"pet name : {self.name} \n pet energy : {self.energy} \n pet HP : {self.health}"
        
    def sleep(self):
        self.energy+=10

    
    def eat(self):
        self.energy+=5
        self.health+=10

    
    def play(self):
        self.health += 5

    
    def noise(self):
        print("noise")

    