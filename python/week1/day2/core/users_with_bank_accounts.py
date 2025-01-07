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
    
    
    def display_info_bank(self):
        return f"your intrest rate is {self.int_rate} \n your balance is {self.balance}"
    
    def yield_intrest(self):
        if self.balance > 0:
            self.balance = self.balance * self.int_rate
        return self
    @classmethod
    def print_all_account(cls):
        for element in cls.list_of_all_accounts:
            print("-"*50)
            element.display_info()


class User:
    all_users = []
    
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        if len(bank_account.list_of_all_accounts) > 0:
            self.account = bank_account.list_of_all_accounts[0]
        
    
    def display_info(self):
        print(f"User details \n name: {self.first_name}\n last name: {self.last_name} \n email: {self.email} \n age: {self.age} \n bank account {self.account.display_info_bank()}")
        return self
    
            
    def update_account(self, index):
        self.account = bank_account.list_of_all_accounts[index]
        
        
    def deposit_in_account(self, amount):
        self.account.deposit(amount)
        return self
    def make_withdrawl(self, amount):
        self.account.withdraw(amount)
        return self
    def show_balance(self):
        print( self.account.balance)
        return self
    
    @staticmethod
    def create_account(int_rate , balance):
        bank_account(int_rate, balance)
        return bank_account
    

User.create_account(1.5, 100)
User.create_account(1.5, 300)
User1 = User("ahmed", "hedi", "rtyuhn@gmail.com", 45)
User1.update_account(1)
User1.display_info()
