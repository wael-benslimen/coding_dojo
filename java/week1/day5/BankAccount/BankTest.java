
public class BankTest {
    public static void main(String[] args) {
        BankAccount b1 =new BankAccount(15, 20);
        b1.deposit(50, "SavingsBalance");
        b1.withdraw(15, "CheckingBalance");
        b1.getBalance();
    }
}
