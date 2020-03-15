// Objeto JSON
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT:37,
    RIGHT: 39
};
console.log(teclas);

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red",x-1 ,y-1,x+1,y+1,papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = "green";
    var moviemiento = 1;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y-moviemiento,papel);
            y = y - moviemiento; 
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y+moviemiento,papel);
            y = y + moviemiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito,x,y,x-moviemiento,y,papel);
            x = x - moviemiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito,x,y,x+moviemiento,y,papel);
            x = x + moviemiento;
            break;
        default:
            console.log("Otra tecla!");
            break;
    }
}