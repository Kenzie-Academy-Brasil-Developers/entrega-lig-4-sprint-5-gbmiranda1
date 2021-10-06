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
    let vez = document.querySelector("#vezJogador").lastElementChild
    disco.classList.add("disco")
    if (jogador) {
        disco.classList.add("disco-jogador")
        jogador = false

        if (jogador2 != "") {
            vez.innerText = "Vez de " + jogador2
        } else {
            vez.innerText = "Vez do jogador PRETO"
        }

        adicionarDiscoAColuna(evt.currentTarget, disco)
    } else {
        disco.classList.add("disco-maquina")
        jogador = true
        if (jogador1 != "") {
            vez.innerText = "Vez de " + jogador1
        } else {
            vez.innerText = "Vez do jogador VERMELHO"
        }
        adicionarDiscoAColuna(evt.currentTarget, disco)
    }

}

function adicionarDiscoAColuna(currentTarget, disco) {
    let status = false
    for (let i = currentTarget.children.length - 1; i >= 0; i--) {
        if (currentTarget.children[i].children.length == 0) {
            if (jogador) {
                matrizJogo[i][dicionario[currentTarget.id]] = "v"
                if (verificaVitoria(i, dicionario[currentTarget.id], "v")) {
                    status = true
                }
            } else {
                matrizJogo[i][dicionario[currentTarget.id]] = "p"

                if (verificaVitoria(i, dicionario[currentTarget.id], "p")) {
                    status = true
                }
            }
            currentTarget.children[i].appendChild(disco)
            break;
        }
    }
    setTimeout(function() {
        if (status) {
            console.log("oi")
            reiniciar()
        }
    }, 200);


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

    let div = document.querySelector(".popup-comecarJogo")
    div.style.display = "flex"
}

criarMatriz()