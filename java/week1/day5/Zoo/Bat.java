
public class Bat extends Mamal {
    Bat(double energy){
        super(energy);
    }
    
    public void fly(){
        this.setEnergy(getEnergy()-50);
        System.out.println("bat is airborn");
    }

    public void eatHumans(){
        this.setEnergy(getEnergy()+25);
        System.out.println("hat has ate");
    }

    public void attackTown(){
        this.setEnergy(getEnergy()-100);
        System.out.println("bathas attacked the town");
    }
}
