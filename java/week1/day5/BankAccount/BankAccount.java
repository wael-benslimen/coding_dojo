
public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    public BankAccount(double checkingBalance, double savingsBalance) {
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        accounts += 1;
    }
    
    // GETTERS
    public double getCheckingBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public static int getAccounts() {
        return accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void deposit (double amount, String location){
        if (location == "CheckingBalance") {
            this.checkingBalance += amount;
            totalMoney += amount;
        }else if(location == "SavingsBalance"){
            this.savingsBalance += amount;
            totalMoney += amount;

        }
    }
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney

    public void withdraw (double amount, String location){
        if (location == "CheckingBalance") {
            if (this.checkingBalance > amount) {
                this.checkingBalance -= amount;
                totalMoney -= amount;

            }else{
                System.out.println("insufficient funds");
            }
        }else if(location == "SavingsBalance"){
            if(this.savingsBalance > amount){
                this.savingsBalance -= amount;
                totalMoney -= amount;

            }else{
                System.out.println("insufficient funds");
            }
        }
    }
    // getBalance
    // - display total balance for checking and savings of a particular bank account
    public void getBalance(){
        System.out.println(String.format("your total in savings is %s\nyour total in chekings is %s", this.savingsBalance, this.checkingBalance));
    }

}

