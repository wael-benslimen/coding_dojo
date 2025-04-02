import java.util.ArrayList;

public class CofeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CofeeKiosk(){
        menu =new ArrayList<>();
        orders =new ArrayList<>();
    }

    public void addMenuItems(Item item){
        menu.add(item);
    }

    public void displayMenu(){
        int index = 0;
        for (Item item : menu) {
            index++;
            System.out.println(index+" "+item.getName()+" -- $"+ item.getPrice());
        }
    }

    public void newOrder(){
        System.out.println("enter customer name for order: ");
        String name = System.console().readLine();
        Order order = new Order(name);
        this.displayMenu();
        String itemIdx = System.console().readLine();
        System.out.println("choose item or type q to quit");
        
        while (!itemIdx.equals("q")) {
            int chosen = Integer.parseInt(itemIdx)-1;
            order.addItem(menu.get(chosen));
            System.out.println("choose anothor item or type q to quit");
            itemIdx = System.console().readLine();
        }
        orders.add(order);
        System.out.println("your order is\n");
        for (Item item : order.getItems()) {
            System.out.println(item.getName()+" - "+item.getPrice());
        }

    }


}
