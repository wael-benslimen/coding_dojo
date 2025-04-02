
public class OrderTest {
    public static void main(String[] args) {
        Order o1 = new Order();
        o1.addItem(new Item("firstItem", 5));
        o1.addItem(new Item("second", 15));
        o1.getStatus();
        o1.getOrderTotal();
        o1.display();
    }

}
