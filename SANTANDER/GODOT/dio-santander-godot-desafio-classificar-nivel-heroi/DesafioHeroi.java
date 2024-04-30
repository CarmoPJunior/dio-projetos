import java.util.Scanner;

/**
 * DesafioHeroi
 */
public class DesafioHeroi {

    public static void main(String[] args) {

        try (Scanner scanner = new Scanner(System.in)) {

            System.out.println("Informe o nome do Heroí");
            String playerName = scanner.nextLine();
            System.out.println("Informe a quantidade XP do Heroí");
            Integer playerXP = scanner.nextInt();

            String playerLevel = getLevel(playerXP);

            String mensagem = String.format("O Herói de nome ( %s ) está no nível de ( %s )", playerName, playerLevel);
            System.out.println(mensagem);
        }
    }

    public static String getLevel(Integer xp) {

        if (xp < 1000) {
            return "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            return "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            return "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            return "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            return "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            return "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            return "Imortal";
        } else {
            return "Radiante";
        }

    }

}