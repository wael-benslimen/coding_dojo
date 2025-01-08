from moduals.pets import Pet

class Dog(Pet):
    def __init__(self, name, tricks):
        super().__init__(name, tricks)
        self.type = "dog"
    
    def display_type(self):
        return f"{self.type}"
    
    def noise(self):
        print("woof")
        