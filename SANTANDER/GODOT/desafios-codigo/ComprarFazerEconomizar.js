const print = (message) => {
  console.log(message);
};

const gets = (message) => {
  return message;
};

const saldoInicial = parseInt(gets(100));
const resultadoUltimoRound = gets("ganhou");
const custoItem = parseInt(gets(115));

function decidirCompraOuEconomizar(
  saldoInicial,
  resultadoUltimoRound,
  custoItem
) {
  let novoSaldo;
  let porcentagemBonus;

  // TODO: Implemente a lógica para ajustar o saldo de acordo com o resultado do último round

  if (resultadoUltimoRound === "ganhou") {
    porcentagemBonus = 1.15;
  } else if (resultadoUltimoRound === "bônus") {
    porcentagemBonus = 1.2;
  } else {
    porcentagemBonus = 1.05;
  }

  novoSaldo = saldoInicial  * porcentagemBonus;

  // Utilizamos a função JavaScript Math.round() para arredondar um número para o inteiro mais próximo.
  novoSaldo = Math.round(novoSaldo);


  print(porcentagemBonus);

  // TODO: Implemente a lógica para verificar se o saldo é suficiente para comprar o item
  if (novoSaldo >= custoItem) {
    print("Comprar");
  } else {
    print("Economizar");
  }
}

// TODO: Chame a função para imprimir o resultado

decidirCompraOuEconomizar(saldoInicial, resultadoUltimoRound, custoItem);
