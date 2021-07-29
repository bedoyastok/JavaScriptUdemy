"use strict"

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("introduce numeros hasta el programa se detiene hasta que ingreses un numero negativo"));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        contador++;
    }
    console.log(suma);
    console.log(contador);

}while(numero >= 0)

alert("la suma de todos los numeros es "+suma);
alert("el promedio de los numeros ingresados es "+(suma/contador));