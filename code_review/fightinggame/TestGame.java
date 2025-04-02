
public class TestGame {
    public static void main(String[] args) {
        System.out.println("welcome player pls enter your name :");
        String name = System.console().readLine();
        Fighter f1 = new Fighter(name);
        Enemy e1 = new Enemy("test enemy");
        e1.addAttack(new Attack("bomb throw", 25));
        e1.addAttack(new Attack("slam", 15));
        e1.addAttack(new Attack("punch", 10));
        
        while (f1.getHealth() >0 && e1.getHealth()>0 ) {
            System.out.println("\nyour turn choose attack");
            f1.displayAttacks();
            System.out.println("enter the number of the attack");
            int a = Integer.parseInt(System.console().readLine());
            f1.attackEnemy(a-1, e1);
            if (e1.getHealth() == 0) {
                System.out.println("you win");
                break;
            }
            e1.randomAttack(f1);
            if (f1.getHealth() == 0) {
                System.out.println("you loose");
                break;
            }
        }
        String again = System.console().readLine()
        if (again.equalsIgnoreCase("yes")) {
            main(args);
        }else{
            System.out.println("game over");
        }
    }
}
