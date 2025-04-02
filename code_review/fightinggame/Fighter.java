
import java.util.ArrayList;

public class Fighter {
    private String name;
    private int health;
    private ArrayList<Attack> attackList ;
    
    public Fighter(String name) {
        this.name = name;
        this.health = 100;
        this.attackList =new ArrayList<>();
        attackList.add(new Attack("sword swipe", 25));
        attackList.add(new Attack("punch", 15));
        attackList.add(new Attack("tackle", 20));
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHealth() {
        return health;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public ArrayList<Attack> getAttackList() {
        return attackList;
    }

    public void setAttackList(ArrayList<Attack> attackList) {
        this.attackList = attackList;
    }

    public void displayAttacks(){
        for (Attack attack : attackList) {
            System.out.println(attack.getName()+" - damage: "+attack.getDamageamount());
        }
    }

    public void decreseHealth(int amount){
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    public void attackEnemy(int index, Enemy enemy){
        if(index >= 0 || index <= attackList.size()){
            Attack attack = attackList.get(index);
            enemy.decreseHealth(attack.getDamageamount());
            System.out.println("you used "+ attack.getName()+ " enemy health is "+ enemy.getHealth());
        }

    }
    
}
