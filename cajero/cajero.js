class Billete 
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
    }

    mostrar(valor)
    {
        this.imagen = new Image();
        this.imagen.src = valor+"Mil.jpg";
        document.body.appendChild(this.imagen);
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja) 
    {
        if (dinero > 0) 
        {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor,papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }

    if (dinero > 0) 
    {
        resultado.innerHTML = "No contamos con dinero o billetes suficiente!!!";
    }
    else
    {
        for (var e of entregado) 
        {
            if (e.cantidad > 0) 
            {
                resultado.innerHTML += e.cantidad+" Billetes de $ "+e.valor+"<br/>";
                for (let i = 1; i <= e.cantidad; i++)
                {
                    e.mostrar(e.valor);
                }
            }
        }
    }
}

var caja = [];
var entregado = [];

caja.push(new Billete(100,5));
caja.push(new Billete(50,10));
caja.push(new Billete(20,5));
caja.push(new Billete(10,20));
caja.push(new Billete(5,5));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);