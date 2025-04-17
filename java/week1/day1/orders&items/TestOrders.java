
public class TestOrders {
    public static void main(String[] args) {

        Item item1 = new Item("mocha", 10.5);
        Item item2 = new Item("latte", 5.5);
        Item item3 = new Item("drip", 50.5);
        Item item4 = new Item("cappo", 20.5);

        Order o1 = new Order("cindum");
        Order o2 = new Order("jimmy");
        Order o3 = new Order("noah");
        Order o4 = new Order("sam");
        System.out.println(o1);
        // System.out.printf("Name: %s\n", order1.name);
        // System.out.printf("Total: %s\n", order1.total);
        // System.out.printf("Ready: %s\n", order1.ready);
    }
}

