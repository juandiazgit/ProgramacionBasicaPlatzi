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
    if (totalCantidadBilletes(caja) == 0)
    {
        resultado.innerHTML = "";
        mostrarDinero.innerHTML = "";
        cajaVacia.innerHTML = "<h3>Cajero quedó sin dinero !!!</h3>";
        return;
    }

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

    resultado.innerHTML = "";
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
        resultado.innerHTML += "<hr/>";
        
        caja = actualizarDineroCaja(caja,entregado);
        entregado = [];
    }
    mostrarDineroCaja(caja);
}

function mostrarDineroCaja(mcaja)
{
    mostrarDinero.innerHTML = "*****El cajero actualmente cuenta con: ***** <br/>";
    for (var ob of mcaja)
    {
        if (ob.cantidad > 0) 
        {
            mostrarDinero.innerHTML += ob.cantidad+" Billetes de $ "+ob.valor+" = "+ob.cantidad*ob.valor+" <br/>";
        }
    }
}

function actualizarDineroCaja(acaja,aentregado)
{
    for (var ae of aentregado)
    {
        for (var ac of acaja) 
        {
            if ((ae.valor == ac.valor) && (ae.cantidad > 0))
            {
                ac.cantidad -= ae.cantidad;
                break;
            }
        }
    }
    return acaja;
}

function totalCantidadBilletes(tcaja) 
{
    let total = 0;
    for (var obj of tcaja) 
    {
        total += obj.cantidad;
    }
    return total;
}

var caja = [];
var entregado = [];

caja.push(new Billete(100,2));
caja.push(new Billete(50,5));
caja.push(new Billete(20,2));
caja.push(new Billete(10,3));
caja.push(new Billete(5,4));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var mostrarDinero = document.getElementById("mostrarDinero");
var cajaVacia = document.getElementById("cajaVacia");
var b = document.getElementById("extraer");
mostrarDineroCaja(caja);
b.addEventListener("click",entregarDinero);