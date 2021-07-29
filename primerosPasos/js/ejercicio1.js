"use strict"

var num1 = prompt("Escribe un numero");
var num2 = prompt("Escribe otro numero");
parseInt(num1,num2);

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = prompt("Escribe un numero");
    num2 = prompt("Escribe otro numero");
    parseInt(num1,num2);
}

if(num1 > num2){
    alert(num1+" es mayor que "+num2);
}else if(num1 < num2){
    alert(num2+" es mayor que "+num1);
}else{
    alert(num1+" y "+num2+" son iguales")
}