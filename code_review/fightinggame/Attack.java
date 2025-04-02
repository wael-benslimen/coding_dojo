
public class Attack {
    private String name;
    private int damageamount;

    public Attack(String name, int damageamount) {
        if(damageamount < 5 || damageamount > 25){
            throw new IllegalArgumentException("damage amount must be between 5 and 25");
        }
        this.name = name;
        this.damageamount = damageamount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDamageamount() {
        return damageamount;
    }

    public void setDamageamount(int damageamount) {
        this.damageamount = damageamount;
    }

}
