"use strict"

var edad_usuario = prompt("¿que edad tienes?");
var edad = parseInt(edad_usuario);
var print = "";

switch(edad){
    case 18:
        print = "tienes 18 estas joven";
    break;
    case 25:
        print = "tienes 25 estas adulto";
    break;
    case 40:
        print = "tienes 40 mucho mayor";
    break;
    case 75:
        print = "tienes 75 tercera edad";
    break;
    default:
        print = "ingresa otra edad";
    break;
}
console.log(print);
