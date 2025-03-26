
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

public class Play {
    
    public void trackListOrginazer(){
        HashMap<String,String> playList = new HashMap<>();
        playList.put("song1","lyrics");
        playList.put("song2","lyrics");
        playList.put("song3","lyrics");
        playList.put("song4","lyrics");
        System.out.println(playList.get("song1"));
        Set<String> keys = playList.keySet();
        System.out.println(keys);
        for (String string : keys) {
            System.out.println(string+":"+ playList.get(string));
        }
    }

}
