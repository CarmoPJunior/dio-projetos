const print = (message) => {
  console.log(message);
};

const gets = (message) => {
  return message;
};

const entrada = gets("A B C B A B A A");
const votos = entrada.split(" ");

const contagemVotos = {};

// Usamos o metodo JavaScript forEach que executa uma função de retorno de chamada para cada elemento da lista para iterar sobre a lista de votos e conta quantos votos cada mapa recebeu.
votos.forEach((voto) => {
  contagemVotos[voto] = (contagemVotos[voto] || 0) + 1;
});

let mapaVencedor;
let maxVotos = 0;

// TODO: Itere sobre cada mapa na contagem de votos para encontrar o vencedor
for (let voto in contagemVotos) {
    if (contagemVotos[voto] > maxVotos) {
      maxVotos = contagemVotos[voto];
      mapaVencedor = voto;
    }
  }
  

print(mapaVencedor);
