class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0
    
    def display_info(self):
        print(f"User details \n name: {self.first_name}\n last name: {self.last_name} \n email: {self.email} \n age: {self.age} \n reward menmber {self.is_rewards_member} \n gold card points: {self.gold_card_points}")
        return self
    
    def enroll(self):
        if self.is_rewards_member == False:
            self.is_rewards_member = True
            self.gold_card_points = 100
        else:
            print("user is already a member")
        return self
    
    def spend_Points(self, amount):
        if self.gold_card_points >= amount:
            self.gold_card_points -= amount
        else:
            print("you dont have enough")
        return self
    
User1 = User("ahmed", "ertyuiop"," dfghj@gmail.com",45)
User1.enroll().spend_Points(50).display_info()
User2 = User("rty", "ertyui","fghjk@gmail.com", 40)
print("*"*50)
User2.enroll().spend_Points(80).display_info()

