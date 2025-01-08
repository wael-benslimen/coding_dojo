from moduals.pets import Pet
class Cat(Pet):
    def __init__(self, name, tricks):
        super().__init__(name, tricks)
        self.type = "cat"
        
    def display_type(self):
        return f"{self.type}"
    
    def noise(self):
        print("meao")