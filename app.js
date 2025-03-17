// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Los nombres de dos funciones ya están dados por el HTML proporcionado, no se cambian para no confundir al equipo.

let amigos = [];
function agregarAmigo (){
    let nombreAmigo = document.getElementById("amigo");

}

let sortearAmigo(){
    if (amigos.length === 0){
        alert('No has añadido ningún amigo a la lista. Añade amigos para sortear');
        return;
    }
    let sorteoDeAmigos = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${sorteoDeAmigos}`;    
}