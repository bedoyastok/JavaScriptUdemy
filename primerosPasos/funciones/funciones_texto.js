'use strict'

var num = 444;
var text1 = "bienvenido al curso de javascript otro curso";
var text2 = "este es OTRO texto";

var dato = num.toString();//funcion para convertir un numeo a un string
var dato1 = text1.toUpperCase();//mayusculas
var dato2 = text2.toLowerCase();//minusculas
var dato3 = text1.length;//propiedad longitud
var dato4 = text1 + text2;
var buscar = text1.match("curso");
var buscar1 = text1.match(/curso/g);
var trozo = text2.substr(5,10);
var buscar2 = text1.includes("otro");
var replace = text2.replace("texto","curso");
var array = text1.split(" ");


console.log(typeof dato);
console.log(dato1);
console.log(dato2);
console.log(dato3);
console.log(dato4);
console.log(buscar);
console.log(buscar1);
console.log(trozo);
console.log(buscar2);
console.log(replace);
console.log(array);

var nom = prompt("Nombre");
var ape = prompt("Apellido");

var plantilla = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nom}</h3>
    <h3>Mi apellido es: ${ape}</h3>
`
document.write(plantilla);

