
public class PuzzleTest {
public static void main(String[] args) {
    Puzzle p1 = new Puzzle();
    System.out.println(p1.getTenRolls());
    System.out.println(p1.getRandomLetter());
    System.out.println(p1.generatePassword());
    System.out.println(p1.getNewPasswordSet(5));
}
    
}