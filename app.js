// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Los nombres de dos funciones ya están dados por el HTML proporcionado, no se cambian para no confundir al equipo.
let amigos = [];
function agregarAmigo() {
    let amigo = document.getElementById("amigo");
    let nombre = amigo.value.trim();

    if (nombre === "") {
        alert("No has escrito algún nombre.");
        return;
    }
    amigos.push(nombre);
    mostrarLista();
    amigo.value = "";
}
function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length === 0){
        alert("No has añadido ningún amigo a la lista. Añade amigos para sortear");
        return;
    }
    let sorteoDeAmigos = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto será: ${sorteoDeAmigos}`;    
}
//Olvidé decirle a la función que utilizara la lista de amigos :(
// La tenía así: let sorteoDeAmigos = Math.floor(Math.random() * amigos.length);
//Recortar espacios