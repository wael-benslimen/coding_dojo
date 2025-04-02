
public class Device {
    private double battry;

    public Device(double battry) {
        this.battry = battry;
    }
    
    

    public void status(){
        System.out.println(this.battry);
    }

    

    public double getBattry() {
        return battry;
    }



    public void setBattry(double battry) {
        this.battry = battry;
    }
}
