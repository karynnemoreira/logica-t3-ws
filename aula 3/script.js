let instrutor = `Samuca`; //Uma caixinha que está guardando um único valor.

//Objetos {} É uma coleção de informações. Pode guardar diferentes tipos, como: number, string, boolean...

let eu = {
  nome: "Karynne", //string
  sobreNome: "Moreira", //string
  nascimento: 2000, //number
  anoNascimento: "2000", //string
};

//Adicionando uma propriedade
//eu = objeto , fruta = propriedade . goiaba = valor
eu.fruta = "goiaba";

//Deletando através do operador delete

//delete  eu=objeto . anoNascimento = propriedade
delete eu.anoNascimento;
//console.log(eu)

//Outro exemplo

let carro = {
  marca: "Fiat",
  modelo: "uninho",
  preco: 50000,
  cores: { cor1: "branca", cor2: "vermelha" },
};

//Saber o tipo da propriedade
//console.log(typeof instrutor) //string
//console.log(typeof modelo) //undefined
//console.log(typeof carro.modelo) //string

delete carro.modelo; //Deletando a propriedade modelo

carro.passageiro = "Betinho Carlos"; //Adicionando a propriedade passageiro
console.log(carro);

//Acessando um objeto dentro de um objeto
console.log(carro.cores);
console.log(carro.cores.cor2);

//Exemplo2 Objeto dentro de objeto
//Os únicos símbolos que podemos utilizar na criação de variáveis são: _ e $
let animais = {
  animal1: "baleia",
  animal2: "cachorro",
  _animais: { _animal1: "gato", $animal2: "papagaio" },
};

console.log(animais._animais.$animal2);

//array []

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
