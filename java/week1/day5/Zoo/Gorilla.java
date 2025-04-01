
public class Gorilla extends Mamal {
    Gorilla (double energy){
        super(energy);
    }

    public void throwSth(){
        this.setEnergy(this.getEnergy()-5);
        System.out.println("the gorilla has thrown Sth");
    }

    public void eatBananas(){
        this.setEnergy(getEnergy()+10);
        System.out.println("Gorella has ate bananas");
    }

    public void climb(){
        this.setEnergy(getEnergy()-10);
        System.out.println("the gorella has climbed a tree");
    }
}
