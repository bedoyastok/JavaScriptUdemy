'use strict'

var movieList = ['Spider Man', 'Superman', 'Dragon Ball Super', 'La era del hielo', 'xvideos'];
var foodList = ['Cancha', 'Papas Fritas', 'Galletas', 'Cheezetos', 'Hot Dog'];
var drinkList = ['Gaseosa', 'Agua'];
var precio;
 
alert("Bienvenido a CinePlanet Perú");
var customerName = prompt("Ingrese su nombre");
while (!isNaN(customerName) || customerName == null) {
    alert("Por favor, ingrese su nombre");
    customerName = prompt("Ingrese su nombre");
}
 
var edad = parseInt(prompt("Ingrese su edad"));
while (isNaN(edad) || edad == null) {
    alert("Por favor, ingresa tu edad");
    edad = parseInt(prompt("Ingrese su edad"));
}
 
var carteleraMovie = prompt("¿Que pelicula deseas ver? \n" + movieList);
while (!isNaN(carteleraMovie) || carteleraMovie == null || !carteleraMovie == movieList.includes(carteleraMovie)) {
    alert("La pelicula que ingresaste no esta en cartelera, por favor escoge de la lista");
    carteleraMovie = prompt("¿Que pelicula deseas ver? \n" + movieList);
}
 
if (edad <= 17 && carteleraMovie == "xvideos") {
    document.write("<h2>Atras pendejo, aun no puedes jalarte el ganzo 7u7</h2>");
} else {
    calcularDesc(50, function (comida) {
            console.log("Comida de regalo: " + comida);
            document.write("<h4>Comida de regalo: " + comida + "</h4>");
        },
        function (bebida) {
            console.log("Bebida: " + bebida);
            document.write("<h4>Bebida de regalo: " + bebida + "</h4>");
        },
        function (total) {
            console.log("Total a pagar: " + total + " soles");
            document.write("<h4>Total a pagar: " + total + " soles </h4>");
        },
    );
}
 
function calcularDesc(precio, food, drink, desc) {
 
    console.log(":::TICKET:::")
    console.log("Cliente: " + customerName);
    console.log("Pelicula: " + carteleraMovie);
 
    document.write("<h3>:::TICKET:::</h3>");
    document.write("<h4>Cliente: " + customerName + "</h4>");
    document.write("<h4>Pelicula: " + carteleraMovie + "</h4>");
 
    if (edad <= 17) {
        var descu = precio * 0.5;
        var total = precio - descu;
        var findFood = [];
        foodList.forEach(
            f => {
                if (f.includes("Galletas") || f.includes("Cheezetos") || f.includes("Hot Dog")) {
                    findFood.push(f);
                }
            }
        );
        var findDrink = drinkList.findIndex(drink => drink == "Gaseosa");
        food(findFood);
        drink(drinkList[findDrink]);
        desc(total);
 
    } else if (edad >= 18 && edad <= 25) {
        total = precio;
        findFood = foodList.findIndex(food => food == "Cancha");
        findDrink = drinkList.findIndex(drink => drink == "Gaseosa");
 
        food(foodList[findFood]);
        drink(drinkList[findDrink]);
        desc(total);
 
    } else if (edad >= 26 && edad <= 35) {
        descu = precio * 0.1;
        total = precio - descu;
        var findFood = [];
        foodList.forEach(
            f => {
                if (f.includes("Cancha") || f.includes("Papas Fritas")) {
                    findFood.push(f);
                }
            }
        );
 
        findDrink = drinkList.findIndex(drink => drink == "Gaseosa");
        food(findFood);
        drink(drinkList[findDrink]);
        desc(total);
 
    } else {
        descu = precio * 0.2;
        total = precio - descu;
        var findFood = [];
        foodList.forEach(
            f => {
                if (f.includes("Cancha") || f.includes("Galletas")) {
                    findFood.push(f);
                }
            }
        );
        findDrink = drinkList.findIndex(drink => drink == "Gaseosa");
        food(findFood);
        drink(drinkList[findDrink]);
        desc(total);
    }
 
}