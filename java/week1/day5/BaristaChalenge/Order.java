import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    public Order(){
        this.name = "Gest";
        this.ready = false;
        this.items =new ArrayList<>();
    }

    public Order(String name){
        this.name = name;
        this.ready = false;
        this.items =new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isReady() {
        return ready;
    }

    public void setReady(boolean ready) {
        this.ready = ready;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public void setItems(ArrayList<Item> items) {
        this.items = items;
    }

    public void addItem(Item item){
        ArrayList<Item> items = this.getItems();
        items.add(item);
        System.out.println(items); 
        this.setItems(items);
    }

    public void getStatus(){
        if(this.ready){
            System.out.println("order ready");
        }else{
            System.out.println("order not ready yet");
        }
    }

    public void getOrderTotal() {
        double total = 0;
        for (Item item : items) { 
            total += item.getPrice(); 
        }
        System.out.println(total); 
    }
    
    public void display(){
        if(this.items.size()>0){

            double total = 0;
            for (Item item : items) {
                total+=item.getPrice();
                System.out.println("total: "+item.getName()+" - "+item.getPrice());
            }
            System.out.println(total);
        }else{
            System.out.println("no items in order");
        }
    }

}
