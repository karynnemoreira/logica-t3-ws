//Estrutura básica de uma função tradicional

//function: Palavra chave usada para criar uma função.
//nomeDaFuncao: Nome dado para a função. Geralmente, escolhemos um nome que descreva o que a função faz, como: mostrarMensagem, calcularSoma, mudarCor.
//Parâmetros () parênteses. É onde colocamos os parâmetros, ou seja, um local reservado para receber um valor () argumentos.
//{} chaves. Dentro das chaves fica o código a ser executado (o que quero que a função faça)
// nomeDaFuncao() ativando/invocando/chamando a função, se não fizer esse passo, a função não funciona.

function mensagem() {
  //Criei uma função e dei o nome de mensagem
  //console.log("Segundou"); //Quero que execute isso aqui
}

mensagem(); //Ativando a função

//--------

//Função utilizando parâmetros e argumentos

function mostrarFruta(fruta) {
  // console.log(fruta);
}

mostrarFruta("morango");

//-----

function mostrarAnimais(animal1, animal2) {
  // console.log(animal1, animal2);
}

mostrarAnimais("gato", "cachorro");

//------
function mostrarRoupa(roupa1, roupa2, roupa3) {
  //console.log(roupa2);
}
mostrarRoupa("bermuda", "saia", "mocassim");

//---- Utilizando operadores matemáticos

function soma(num1, num2) {
  //console.log(num1 + num2);
}

soma(3, 4);

//----

function subtracao(num1, num2) {
  // console.log(num1 - num2);
}

subtracao(3, 4);

//----

function multiplicacao(num1, num2) {
  // console.log(num1 * num2);
}

multiplicacao(3, 4);

//----

function dividir(a, b) {
  //  console.log(a / b);
}
dividir(9, 4);

//Função anônima é uma função que não tem nome.

//Ex1
const somar = function (a, b) {
  return a + b;
};

console.log(somar(2, 3));

//Ex2

const comprarIngresso = function (nome, idade) {
  console.log(idade, nome);
};
comprarIngresso("Gabriel", 22);

//Ex3

const informacoes = function (nome, idade, cidade) {
  console.log(nome, idade, cidade);
};

informacoes("Lua", "8 anos", "Rio de Janeiro");

//Arrow function  ()=>{}
//Sintaxe arrow function
//const nomeDaVariavel = () => {}

//Ex 1 utilizando o {return}
const diminuirArrowFunction = (valor1, valor2) => {
  return valor1 - valor2;
};
console.log(diminuirArrowFunction(13, 24));

//Ex2 sem chaves e sem retorno
const somarArrowFunction = (valor1, valor2) => valor1 + valor2;
console.log(somarArrowFunction(13, 24));

//Declarando uma arrowfunction dentro de outra função

function funcaoPai() {
  console.log("Olá, eu sou uma função tradicional");

  const cor = () => console.log("A cor mais braba é o vermelho");
  cor();
}

funcaoPai();
