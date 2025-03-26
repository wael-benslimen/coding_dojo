
import java.util.ArrayList;

public class CafeUtil {
    public int getStreakGoal(int numweeks){
        int sum = 0;
        for (int i = 0; i < numweeks; i++) {
            sum+=i;
        }
        return sum;
    }
    public int getStreakGoal(){
        int sum = 0;
        for (int i = 0; i < 10; i++) {
            sum+=i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices){
        double sum = 0.0;
        for (double d : prices) {
            sum = sum+d;
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menu){
        for (int i = 0; i < menu.size(); i++) {
            System.out.println(i+" "+menu.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers){
        String username = System.console().readLine();
        customers.add(username);
        System.out.println("Hello ! "+ username);
        System.out.println(customers.toString());
    }
}
