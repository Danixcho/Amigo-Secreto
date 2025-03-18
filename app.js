// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('agregarBtn').addEventListener('click', agregarAmigo);
    document.getElementById('sortearBtn').addEventListener('click', sortearAmigo);
});

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);

    if (amigo === '') {
        alert("Por favor, inserte un nombre válido.");
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        cleanBox();
        mostrarLista();
    }
}

function cleanBox() {
    document.getElementById('amigo').value = '';
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let amigoGanador = "";
    if (listaAmigos.length > 0) {
        let indiceGanador = Math.floor(Math.random() * listaAmigos.length);
        amigoGanador = listaAmigos[indiceGanador];
        document.getElementById("resultado").innerHTML = "Tu amigo sorteado fue: " + amigoGanador;

        console.log(amigoGanador);
    } else {
        alert("Ingresa nombres");
    }
}