var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
//console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi,xf;
    var xi,yf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l+1);
        xi = yi;
        yf = xf;
        dibujarLinea(colorcito, 0, yi, xf, ancho);
        dibujarLinea(colorcito, xi, 0, ancho, yf);
        //console.log("Linea "+l);
    }
    
    dibujarLinea(colorcito, 1, 1, 1, ancho);
    dibujarLinea(colorcito, 1, ancho-1, ancho-1, ancho-1);
    dibujarLinea(colorcito, 1, 1, ancho, 1);
    dibujarLinea(colorcito, ancho, 1, ancho-1, ancho-1);
}

boton.addEventListener("click",dibujoPorClick);
//console.log(boton);