"use strict"

/*
var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}
*/

function sumale(num1,num2,sumaMuestra,sumaPosDos) {
    var sumar = num1 + num2;

    sumaMuestra(sumar);
    sumaPosDos(sumar);

    return sumar;
}

sumale(5,5,function(dato){
    console.log("la sumaMuestra es: " + dato);
},
function(dato){
    console.log("la sumaPosDos es: " + (dato*2));
});