var edad = 18;

if (edad >= 18) {
console.log("La persona es mayor de edad");
} else {
console.log("La persona es menor de edad");
}


var x = 0;

for (x; x < 6; x++) {
    console.log("el valor de x es: "+x);
}

var x = 10;

while (x > 0){
    console.log("el valor de x es: "+x);
    x--;
}


var x = 10;

for (x; x > 0; x--) {
    if (x==5){
        break;
    }
    console.log("el valor de x es: "+x);
}

function holamundo(){
    console.log("Hola Mundo");
}


function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

suma = sumar(3,4);
console.log(suma);