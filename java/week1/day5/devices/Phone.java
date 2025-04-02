
public class Phone extends Device {
    public Phone(){
        super(100);
    }

    public void makeCall(int number){
        System.out.println("dialing "+number);
        this.setBattry(getBattry()-5);
    }

    public void playGame(String name){
        System.out.println("now playing " + name);
        this.setBattry(getBattry()-20);

    }

    public void charge(){
        this.setBattry(getBattry()+50);
        System.out.println("battry charged");
    }
}
