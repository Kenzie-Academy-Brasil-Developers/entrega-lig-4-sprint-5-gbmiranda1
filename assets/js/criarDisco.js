let jogador = true
let matrizJogo = []


function criarDisco(evt) {
    let disco = document.createElement("div")
    if (jogador) {
        disco.classList.add("disco-jogador")
        jogador = false
    } else {
        disco.classList.add("disco-maquina")
        jogador = true
    }
    adicionarDiscoAColuna(evt.currentTarget, disco)
}

function adicionarDiscoAColuna(currentTarget, disco) {
    for (let i = currentTarget.children.length - 1; i >= 0; i--) {
        console.log("oi")
        if (currentTarget.children[i].children.length == 0) {
            currentTarget.children[i].appendChild(disco)
            break;
        }
    }
}

function criarMatriz() {
    for (let i = 0; i < 6; i++) {
        matrizJogo[i] = []
        for (let j = 0; j < 7; j++) {
            matrizJogo[i].push("")
        }
    }
    console.log(matrizJogo)
}