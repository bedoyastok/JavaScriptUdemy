"use strict"

/* var num1 = parseInt(prompt("Introduce el primer numero: "));
var num2 = parseInt(prompt("Introduce el segundo numero: "));

while(num1 < num2){
    num1++;

    if(num1 % 2 != 0){
        console.log("El " + num1 + " es impar");
    }
} */

var num3 = parseInt(prompt("Introduce un numero: "))

for(var i = 1; i <= num3; i++){
    if(num3 % i == 0){
        console.log("Divisor: " + i)
    }
}