class bank_account:
    list_of_all_accounts = []
    
    def __init__(self, int_rate, balence):
        self.int_rate = int_rate
        self.balance = balence
        bank_account.list_of_all_accounts.append(self)
        
    def deposit(self, amount):
        self.balance = self.balance + amount
        return self
    
    
    def withdraw(self, amount):
        if self.balance > amount:
            self.balance = self.balance - amount
        else:
            self.balance-=5
        return self
    
    
    def display_info(self):
        print(f"your intrest rate is {self.int_rate} \n your balance is {self.balance}")
        return self
    
    def yield_intrest(self):
        if self.balance > 0:
            self.balance = self.balance * self.int_rate
        return self
    @classmethod
    def print_all_account(cls):
        for element in cls.list_of_all_accounts:
            print("-"*50)
            element.display_info()
            
    
        

account1 = bank_account(1.5, 100)
account2 = bank_account(1.5, 200)
account1.deposit(50).deposit(50).deposit(50).withdraw(80).yield_intrest().display_info()
account2.deposit(100).deposit(50).withdraw(80).withdraw(20).withdraw(50).withdraw(60).yield_intrest().display_info()

bank_account.print_all_account()
