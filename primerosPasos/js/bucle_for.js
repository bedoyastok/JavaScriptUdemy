"use strict"

var num_usuario = prompt("ingresa un numero");
var num = parseInt(num_usuario);

for (let i = 0; i <= 10; i++) {
    var multiplicacion = i * num;
    console.log(i+" x "+num+" = "+multiplicacion);
}