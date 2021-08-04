'use strict'

var categ = ['accion','terror','comedia'];
var peli = ['primera pelicula','tercera pelicula','segunda pelicula'];

var cine = [categ,peli];

console.log(cine);
console.log(cine[0][1]);

/***************/
var elemento = "";

do{
    elemento = prompt("introduce una pelicula");
    peli.push(elemento);
}while(elemento != "no");

peli.pop();
console.log(peli);

/******busqueda******/
var busqueda = categ.findIndex(categ => categ == "comedia");
console.log(busqueda);