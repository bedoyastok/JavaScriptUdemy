"use strict"

var num1 = parseInt(prompt("Introduce el primer numero: "));
var num2 = parseInt(prompt("Introduce el segundo numero: "));

document.write("<h1>Desde " + num1 + " hasta " + num2 + " esta los siguientes numeros: </h1>");
for(var i = num1; i <= num2; i++){
    document.write(i + "<br/>");
}
