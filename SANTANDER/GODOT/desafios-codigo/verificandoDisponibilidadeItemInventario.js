// Descrição
// Você é um aventureiro e está prestes a embarcar em uma jornada de proporções épicas! A cada desafio enfrentado, é crucial que você avalie com cuidado se possui tudo o que precisa para avançar, pois até mesmo a falta de um simples artefato pode fazer toda a diferença entre a vitória e a derrota iminente. No momento, em seu inventário, você possui uma espada, um escudo, seis poções de cura, quatro poções de mana e três pergaminhos. Diante disso, é hora de você verificar se cada item essencial para o próximo desafio está disponível em seu inventário. Assim, sua missão é criar um algoritmo que retorne a mensagem “Disponível”, caso possua o item na quantidade especificada no seu inventário, e “Indisponível” caso não.

// Entrada
//  A entrada vai receber duas informações: o nome do item a ser verificado e a quantidade desejada desse item.

// Saída
// Imprima "Disponível" se a quantidade desejada do item estiver disponível no inventário e "Indisponível" caso contrário.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// espada
// 1	Disponível
// escudo
// 2	Indisponível
// pergaminho
// 2	Disponível





// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

const print = (message) => {
    console.log(message);
}

const gets = (message) => {
   return message
}


const nome = gets('escudo');
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const quantidade = parseInt(gets(2));

let inventario = [
    { nome: 'espada', quantidade: 1 },
    { nome: 'escudo', quantidade: 1 },
    { nome: 'poção de cura', quantidade: 6 },
    { nome: 'poção de mana', quantidade: 4 },
		{ nome: 'pergaminho', quantidade: 3 }
];

// Utilizamos o metodo JavaScript find() para buscar o primeiro elemento no array que satisfaça a condição especificada por uma função de callback.
let item = inventario.find(item => item.nome === nome);

// TODO: Implemente a condição necessária para a exibição de cada mensagem
console.log(item);
if(quantidade > item.quantidade){
  print(`Indisponível`);
}else{
  print(`Disponível`);
}