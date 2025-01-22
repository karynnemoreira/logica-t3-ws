let guanabara = [
  "guaracamp",
  "coquinha",
  "nuggets",
  "açúcar",
  "biscoito",
  "bolacha",
  "massa de pastel",
  "café",
  "bis",
  "salgadinho",
  "azeite",
  "arroz",
  "maçã",
  "abacate",
];

//Métodos de array
// push() Adiciona um item no final da array
// unshift() Adiciona um item no começo da array
// pop() Remove o último item da array
// shift() Remove o primeiro item da array

//console.log(guanabara.length); //14itens que tenho na array guanabara

guanabara.push("feijão"); //Adiciona um item no final da array

guanabara.unshift("banana"); //Adiciona um item no começo da array

guanabara.pop(); //Remove o último item da array

guanabara.shift(); //Remove o primeiro item da array

//console.log(guanabara);

//-----SPLICE, O MÉTODO SPLICE TEM O PODER DE SUBSTITUIR, ADICIONAR E REMOVER

//                    0         1       2       3
let instrutores = ["Karynne", "Joy", "João", "Samuca"];

//-------------SUBSTITUIR----------------
//SUBSTITUIR - 1º É O ÍNDICE , O 2º É A QUANTIDADE, "VALOR"
//O primeiro valor é o índice, ou seja, à partir de qual local. O segundo valor é a quantida, ou seja, quantos quero substituir. " por quem eu quero substituir"

instrutores.splice(1, 1, "Carol"); //No índice 1, substitua 1 elemento, por "Carol"

//console.log(instrutores)

//Ex2 Substituindo 2 elementos

instrutores.splice(2, 2, "Cris", "Dandara"); //À partir do índice 2, substitua 2 elementos por "Cris", "Dandara"

//console.log(instrutores)

//['Karynne', 'Carol', 'Cris', 'Dandara']
//Ex3
instrutores.splice(3, 1, "Kleber"); //No índice 3, substitua 1 elemento, por: "Kleber"
//console.log(instrutores);

//-------------ADICIONAR----------------

//ATÉ O MOMENTO, A  NOSSA ARRAY ESTÁ ASSIM
//    0          1        2        3
//['Karynne', 'Carol', 'Cris', 'Kleber']

//ADICIONAR - O 1º É O ÍNDICE, O 2º É O 0 ZERO, QUER DIZER QUE NÃO QUERO REMOVER NENHUM, "VALOR"

instrutores.splice(2, 0, "Vini"); //no índice 2, não remova nada 0, e adicione "Vini"
//console.log(instrutores);

instrutores.splice(1, 0, "Samuca");
//console.log(instrutores);

//Dúvida do Luan sobre adicionar no final da array
instrutores.push("Luan"); //Adicionando um item no final da array
//console.log(instrutores);

instrutores.splice(7, 0, "Romulo"); //Adicionando um item no final da array
//console.log(instrutores);

//['Karynne', 'Samuca', 'Carol', 'Vini', 'Cris', 'Kleber', 'Luan', 'Romulo']

//Adicionando 3 elementos à partir do índice 4
instrutores.splice(4, 0, "Miguel", "Gabi", "Wisney");
//console.log(instrutores);

//----------REMOVER ----------
// ['Karynne', 'Samuca', 'Carol', 'Vini', 'Miguel', 'Gabi', 'Wisney', 'Cris', 'Kleber', 'Luan', 'Romulo']

//REMOVER, 1º VALOR É O ÍNDICE, 2º VALOR É A QUANTIDADE

instrutores.splice(2, 2); //à partir do índice 2, remova 2 elementos
//console.log(instrutores)

instrutores.splice(6, 2); //à partir do índice 6, remova 2 elementos
console.log(instrutores);

//['Karynne', 'Samuca', 'Miguel', 'Gabi', 'Wisney', 'Cris', 'Romulo']

instrutores.splice(3, 1);
console.log(instrutores);

//Trazendo a Gabi e o Luan de volta para o BBB

instrutores.splice(3, 0, "Gabi", "Luan");
console.log(instrutores);
