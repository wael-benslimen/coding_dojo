
import java.util.ArrayList;
import java.util.Random;

public class Enemy {
    private String name;
    private int health;
    private ArrayList<Attack> attackList ;
    
    public Enemy(String name) {
        this.name = name;
        this.health = 100;
        this.attackList =new ArrayList<>();
    }
    // setters and getters
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
    // methods
    public void addAttack(Attack attack){
        attackList.add(attack);
    }

    

    public void decreseHealth(int amount){
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    public void randomAttack(Fighter victim){
        Random r =new Random();
        Attack attack = attackList.get(r.nextInt(0, attackList.size()));
        victim.decreseHealth(attack.getDamageamount());
        System.out.println(victim.getName()+" has been attacked "+ attack.getDamageamount()+" damage taken "+" your health is "+ victim.getHealth());
    }
    
}
