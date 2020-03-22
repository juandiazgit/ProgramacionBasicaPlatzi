var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cantidad = aleatorio(1,5);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

function cargarFondo() 
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarVaca() 
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarCerdo() 
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollo() 
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar() 
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOK)
    {
        console.log("Cantidad: "+cantidad);
        dibujarAleatorio(cantidad,vaca);
    }
    if (cerdo.cargaOK) {
        dibujarAleatorio(cantidad,cerdo);
    }
    if (pollo.cargaOK) {
        dibujarAleatorio(cantidad,pollo);
    }
}

function dibujarAleatorio(cantidad,objeto) {
    for (var v = 0; v < cantidad; v++) {
        var x = aleatorio(0,7);
        var y = aleatorio(0,7);
        var x= x * 60;
        var y= y * 60;
        papel.drawImage(objeto.imagen,x,y);
    }
}

function aleatorio(min,maxi)
{
    var resultado = Math.floor( Math.random() * ( maxi - min + 1 ) ) + min;
    return resultado;
}