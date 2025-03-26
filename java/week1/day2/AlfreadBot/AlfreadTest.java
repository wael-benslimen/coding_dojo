public class AlfreadTest {
    public static void main(String[] args) {
        AlfreadQuotes bot = new AlfreadQuotes();
        System.out.println(bot.greeting("wael"));
        System.out.println(bot.greeting("wael","morning"));
        System.out.println(bot.dateAnnoncement());
        System.out.println(bot.respondBeforeAlexis("alexis"));
        System.out.println(bot.respondBeforeAlexis("alfread"));
        System.out.println(bot.respondBeforeAlexis("test"));
    }
}
