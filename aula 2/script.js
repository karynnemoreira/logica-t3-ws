//Operadores Aritméticos

let numero = 5;

//            5        5
//console.log(numero + numero)
//console.log(numero - numero)
//console.log(numero * numero)
//console.log(numero / numero)
//console.log(numero % numero) //  5/5 = 1 'resta 0'

//Operadores de comparação

let variavel1 = 2; //number
let variavel2 = "2"; //string, texto
let perifericos = "mouse"; //string

//console.log(variavel1, variavel2)

//console.log(variavel1 == variavel2) //true (verdade) Pq o valor que está sendo guardado na variavel1 é o mesmo valor que está sendo guardado na variavel2

//console.log(variavel1 === variavel2) //false, pq os tipos são diferente, apesar de terem o mesmo valor.

//            number         string
//console.log(variavel1 === perifericos)

//             "2"
//console.log(variavel2 != 2) // False, pq eles tem o mesmo valor. 2 é igual a 2, não são diferentes.

//             "2"
//console.log(variavel2 !== 2) //True, pq é verdade que eles são diferentes. "2" tem o mesmo valor de 2, mas um é string e outro é number.

let variavel3 = 7; //number
let variavel4 = 2; //number
let variavel5 = 7;

//             7            2
//console.log(variavel3 > variavel4) //True, pq é verdade essa informação de que 7 é MAIOR que 2

//console.log(variavel3 < variavel4) //False, pq 7 é MAIOR que 2, e não menor.

//            7              7
//console.log(variavel3 >= variavel5)

//             7             2
//console.log(variavel3 <= variavel4)

//------CONDICIONAIS

//SE
// if(condição){
//     console.log("retorno")
// }

//SE idade for maior ou igual a 18, retorna pra mim "Sextou e é dia de beber água" else (senão) , retorna pra mim "Vai ficar no guaravita

// let idade = 18

// if(idade >= 18){
// //console.log("Vai ficar no guaravita")
// } else {
//     console.log("Sextou e é dia de beber água")
// }

//Else If, nos dá mais opções de resposta

let numeroDaSorte = 1;

// if(numeroDaSorte === 1){
// console.log("Aí sim hein, ganhou o prêmio máximo de moedas vnw")
// } else if (numeroDaSorte === 3){
// console.log("Você ganhou 5 moedas vnw")
// } else if(numeroDaSorte === 4){
// console.log("Você ganhou um guaravita")
// } else {
//     console.log("A banca sempre ganha")
// }

//ex2
let animal = "galo";

if (animal === "galo") {
  console.log("Aí sim hein, ganhou o prêmio máximo de moedas vnw");
} else if (animal === "cabra") {
  console.log("Você ganhou 5 moedas vnw");
} else if (animal === "borboleta") {
  console.log("Você ganhou um guaravita");
} else {
  console.log("A banca sempre ganha");
}
