"use strict"

var lista = ["numero","array","curso",52,true];

var otra = new Array("php","java","kotlin","go");

console.log(lista);
console.log(otra.length);
console.log(otra);

/* var elemento = parseInt(prompt("Introduce un numero de la lista"))
if(elemento >= lista.length){
    alert("introduce un numero menor a " + lista.length);
}else{
    alert("el elemento selecionado es " + lista[elemento]);
} */


document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");

/* for(var i = 0; i < otra.length; i++){
    document.write("<li>"+ otra[i] +"</li>");
} */

otra.forEach((elemento)=>{
    document.write("<li>"+ elemento +"</li>");
});
document.write("</ul>");