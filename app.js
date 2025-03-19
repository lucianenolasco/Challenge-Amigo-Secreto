//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionar() {
    let amigo = document.getElementById('amigo');
    if (amigo.value == '') {
        alert('Por favor, insira um nome.');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome duplicado!');
        return;
    }

    let lista = document.getElementById('listaAmigos');
    amigos.push(amigo.value);

    if (lista.textContent == '') {
    lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}
function sortearAmigo() {
    if (amigos.length < 6) {
        alert("Digite pelo menos 6 nomes");
        return;
    }

    embaralharNomes(amigos);
    let sorteio = document.getElementById('resultado');

    for (let il = 0; i < amigos.length; il++) {
        if (il == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[il] + ' --> ' + amigos[0] + '<br>';

        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[il] + ' --> ' + amigos[il + 1] + '<br>';
        }
    }

}
function embaralharNomes (lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}