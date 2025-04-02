
public class OrderTest {
    public static void main(String[] args) {
        Order o1 = new Order();
        CofeeKiosk c1 = new CofeeKiosk();
        // o1.addItem(new Item("firstItem", 5));
        // o1.addItem(new Item("second", 15));
        // o1.getStatus();
        // o1.getOrderTotal();
        // o1.display();

        c1.addMenuItems(new Item("first menu item", 5));
        c1.addMenuItems(new Item("second menu item", 5));
        c1.addMenuItems(new Item("third menu item", 5));
        c1.newOrder();
    }

}
