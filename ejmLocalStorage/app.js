/*const nombre = "Ignacio";
localStorage.setItem("nombreUsuario",nombre);

sessionStorage.setItem("nombreUsuario",nombre);

const nombreLocalStorage = localStorage.getItem("nombreUsuario");
console.log(nombreLocalStorage);
localStorage.removeItem("nombreUsuario");*/

//guardar_localstorage();

obtener_localstorage();

function obtener_localstorage() {
     
    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));
    
    if (persona == null && nombre == null) {
        console.log("No hay entradas en el Local Storage.");
        return;
    }
    
    if (nombre != null) {
        console.log(nombre);    
    }

    if (persona != null) {
        console.log(persona.nombre);
        console.log(persona);    
    }
}

function guardar_localstorage() {
    
    let persona = {
        nombre : "Fernando",
        edad : 31,
        correo : "xyz@xyz.com",
        coord : {
            lat : 10,
            lng : -10
        }
    };

    let nombre = "Pedro";
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("persona",JSON.stringify(persona));
}
