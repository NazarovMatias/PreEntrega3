let header= document.getElementById("titulo");
let opciones= document.getElementsByClassName("opciones");
let nav= document.getElementsByClassName("nav")

for (const opcion of opciones){
    console.log(opcion.innerHTML);
}

titulo.innerText= "Titulo Principal";

let parrafo= document.createElement("p");
parrafo.innerHTML= "<p>Redes</p>";
document.body.append(parrafo);

let concierto = { id: 1,  nombre: "Bon Jovi", precio: 12500 };
let concatenado = "ID : " + banda.id +" - Concierto: " + concierto.nombre + "$ "+concierto.precio;
let plantilla   = `ID: ${concierto.id} - Concierto ${concierto.nombre} $ ${concierto.precio}`;
console.log(concatenado);
console.log(plantilla);

let contenedor = document.createElement("div");
contenedor.innerHTML = `<h3> ID: ${concierto.id}</h3>
                        <p>  Producto: ${concierto.nombre}</p>
                        <b> $ ${concierto.precio}</b>`;
document.body.appendChild(contenedor);

let boton= document.getElementById("btnPrincipal")
    boton.addEventListener("click", respuestaClick)
    function respuestaClick(){
        console.log("Respuesta evento");
    }
