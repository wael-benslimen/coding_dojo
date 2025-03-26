import java.time.LocalDate;
public class AlfreadQuotes {


    public String greeting(String name){
        return String.format("Hello!, %s", name);
    }
    public String greeting(String name, String time){

        return String.format("good %s !, %s", time ,name);
    }
    
    public String dateAnnoncement(){
       LocalDate date = LocalDate.now();
        return date.toString();
    }

    public String respondBeforeAlexis(String conv){
        if(conv == "alexis"){
            return  "Right away, sir. She certainly isn't sophisticated enough for that.";
        }else if(conv == "alfread"){
            return "At your service. As you wish, naturally.";
        }else{
            return "Right. And with that I shall retire.";
        }
    }
}