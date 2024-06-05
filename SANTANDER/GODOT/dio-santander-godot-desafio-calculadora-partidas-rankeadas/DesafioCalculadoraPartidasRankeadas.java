import java.util.Scanner;

/**
 * DesafioCalculadoraPartidasRankeadas
 */
public class DesafioCalculadoraPartidasRankeadas {

    public static void main(String[] args) {

        try (Scanner scanner = new Scanner(System.in)) {

            System.out.println("Informe a quantidade de vitórias:");
            Integer qtVitorias = scanner.nextInt();
            System.out.println("Informe a quantidade de derrotas");
            Integer qtDerrotas = scanner.nextInt();

            Integer saldoVitorias = qtVitorias - qtDerrotas;

           String nivel = getNivel(saldoVitorias);

            String mensagem = String.format("O Herói tem de saldo de **{ %s }** está no nível de ( %s )", saldoVitorias, nivel);
            System.out.println(mensagem);
            // O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**

        }catch (Exception e) {
            // TODO: handle exception
        }
    }

    public static String getNivel(Integer xp) {

        if (xp <= 10) {
            return "Ferro";
        } else if (xp >= 11 && xp <= 20) {
            return "Bronze";
        } else if (xp >= 21 && xp <= 50) {
            return "Prata";
        } else if (xp >= 51 && xp <= 80) {
            return "Ouro";
        } else if (xp >= 81 && xp <= 90) {
            return "Diamante";
        } else if (xp >= 91 && xp <= 100) {
            return "Lendário";
        } else {
            return "Imortal";
        } 

    }

}