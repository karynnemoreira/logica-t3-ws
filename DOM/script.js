//querySelector("seletor")  Retorna apenas o elemento correspondente ao seletor/tag
//getElementById ("id") Retorna o único elemento
//getElementByClassName ("class") Retorna uma coleção de elementos [] índice.

document.querySelector("h1").textContent = "Boa noite T3";
document.querySelector("h1").style.color = "violet";
document.querySelector("h1").style.backgroundColor = "yellow";

//Outro exemplo para mudança de texto
//document.querySelector("h1").innerHTML = "Teste para o Diego"

//ID

let titulo = document.getElementById("titulo");
titulo.style.color = "red";
titulo.style.fontSize = "45px";

//Class

let mensagem = document.getElementsByClassName("mensagem");

mensagem[0].style.color = "orange";
mensagem[0].style.fontWeight = "bold";

mensagem[1].style.fontSize = "30px";

mensagem[0].textContent = "Chuva, vai embora!"; //Muda o texto

mensagem[1].innerHTML = "Chuva, vai embora!"; //Muda o texto também
