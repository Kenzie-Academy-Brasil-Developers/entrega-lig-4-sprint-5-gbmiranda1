let jogador = true
let matrizJogo = []

let dicionario = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
}

function criarDisco(evt) {
    let verifica = true

    for (let i = evt.currentTarget.children.length - 1; i >= 0; i--) {
        if (evt.currentTarget.children[i].children.length == 0) {
            verifica = false
            break;
        }
    }
    if (verifica) {
        return;
    }
    let disco = document.createElement("div")
    disco.classList.add("disco")
    if (jogador) {
        disco.classList.add("disco-jogador")
        adicionarDiscoAColuna(evt.currentTarget, disco)
        jogador = false
    } else {
        disco.classList.add("disco-maquina")
        adicionarDiscoAColuna(evt.currentTarget, disco)
        jogador = true
    }

}

function adicionarDiscoAColuna(currentTarget, disco) {

    for (let i = currentTarget.children.length - 1; i >= 0; i--) {
        console.log("oi")
        if (currentTarget.children[i].children.length == 0) {
            console.log(dicionario[currentTarget.id], i)
            if (jogador) {
                matrizJogo[i][dicionario[currentTarget.id]] = "v"
                verificaVitoria(i, dicionario[currentTarget.id], "v")
            } else {
                matrizJogo[i][dicionario[currentTarget.id]] = "p"
                verificaVitoria(i, dicionario[currentTarget.id], "p")
            }
            currentTarget.children[i].appendChild(disco)
            break;
        }
    }
    console.log(matrizJogo)
}

function criarMatriz() {
    for (let i = 0; i < 6; i++) {
        matrizJogo[i] = []
        for (let j = 0; j < 7; j++) {
            matrizJogo[i].push("")
        }
    }
}

function reiniciar() {
    let elements = document.querySelectorAll(".disco")
    for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i])
    }
    for (let i = 0; i < matrizJogo.length; i++) {
        for (let j = 0; j < matrizJogo[i].length; j++) {
            matrizJogo[i][j] = ""
        }
    }
    jogador = true
}

criarMatriz()