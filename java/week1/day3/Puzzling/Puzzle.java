import java.util.ArrayList;
import java.util.Random;

public class Puzzle {
    
    public ArrayList<Integer> getTenRolls(){
        Random randnum = new Random();
        ArrayList<Integer> res = new ArrayList<>(); 
        for (int i = 0; i < 10; i++) {
            res.add(randnum.nextInt(1, 10));
        }
        return res;
    }

    public String getRandomLetter(){
        String[] letters = {"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"};
        Random randnum = new Random();
        int num = randnum.nextInt(0,25);
        return letters[num];
    }

    public String generatePassword(){
        String pw = "";
        for (int i = 0; i < 8; i++) {
            pw = pw.concat(getRandomLetter());
        }
        return pw;
    }
    public ArrayList<String> getNewPasswordSet(int length){
        ArrayList<String> pwSet = new ArrayList<>();
        for (int i = 0; i < length; i++) {
            pwSet.add(generatePassword());
        }
        return pwSet;
    }
}
