var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new pakiman("Cauchin",100,30));
coleccion.push(new pakiman("Pokacho",80,50));
coleccion.push(new pakiman("Tocinauro",120,40));

for (var objeto of coleccion) 
{
    objeto.mostrar();
}

for (var atributos in coleccion[0]) {
    console.log(atributos);
}