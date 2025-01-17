//console.log("Olá, mundo!")

//Escopo global é declarada fora de uma função 
let amigoManeiro = "Samuca"
//console.log(amigoManeiro)


//Escopo local é declara dentro de uma função

function amigaozao(){
    let amigoManeiro = "Samuca Silvério"
    //console.log(amigoManeiro)
}
amigaozao()

//Case sensitive: O uso de letras maiúsculas e minúsculas faz diferença, tem que ser exatamente do mesmo jeito. 

let fruta = "acerola"
let FRUTA = "manga"
let Fruta = "pitanga"
console.log(Fruta)

//Camel Case: É uma escrita que lembra a corcunda de uma camelo. A primeira palavra é minúscula, a primeira letra das palavras seguintes é maiúscula.

let nome = "Beatriz"
let sobreNome = "Corrêa"
let ultimoNomeDaBea = "Santos"

console.log(ultimoNomeDaBea)

//Simbologias nas variáveis _ e $ 

let _cachorro = "Vira latinha"
let $cachorro = "Poodle"

// console.log(_cachorro)
// console.log($cachorro)

//Redeclarando variáveis 

_cachorro = "Pastor Alemão"
console.log(_cachorro)

$cachorro = "Husky"
console.log($cachorro)

nome = "Gleice"
console.log(nome)

//constante não pode ser redeclarada, é o valor único. Não pode ser mudado.

// const cor = "azul"
// cor = "amarelo"

//Tipos de valores - typeof para saber o tipo

const anoNascimento = 2004 //valor number/numérico
console.log(typeof anoNascimento)

const _anoNascimento = "2004"
console.log(typeof _anoNascimento)

let idade = 23 //number
let carro = "corsinha" //string - textual
let animal = 'girafa' //string - textual
let cidade = `Rio de Janeiro` //string - textual
let brasileiro = true //boleano
let estrangeiro = false  //boleano

console.log(typeof brasileiro)

//Template String `${}` É uma forma mais elegante, mais potente de uma string/texto. Consigo armazenar dados de uma outra variável.

let informacoes = ` Olá me chamo ${animal}, tenho ${idade} anos e moro no ${cidade}  ` 
console.log(informacoes)

//Alguns tipos de erros e mensagens 

let tipo = null; //nulo, algo vazio propositalmente. Não há valor no momento. 

let _tipo = undefined; //Algo não está definido

let $tipo = NaN; //Not a number, não é um valor numérico. 