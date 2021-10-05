const divResultado = document.createElement("div")
const vitoriaPreto = document.createElement("p")
vitoriaPreto.innerText = "Vitoria do jogador Preto"
const vitoriaVermelho = document.createElement("p")
vitoriaVermelho.innerText = "Vitoria do jogador Vermelho"
const empate = document.createElement("p")
empate.innerText = "O jogo terminou em empate"
const body = document.querySelector("body")
body.appendChild(divResultado)


/* VERIFICACAO HORIZONTAL */
function horizontal() {
    for (let i = 0; i < 6; i++) {
        for (let x = 0; x < 7; x++) {
            if (matrizJogo[i][x] === "v" && matrizJogo[i + 1][x] === "v" && matrizJogo[i + 2][x] === "v" && matrizJogo[i - 3][x] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            if (matrizJogo[i][x] === "p" && matrizJogo[i + 1][x] === "p" && matrizJogo[i + 2][x] === "p" && matrizJogo[i - 3][x] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
            if (matrizJogo[i][x] === "v" && matrizJogo[i - 1][x] === "v" && matrizJogo[i - 2][x] === "v" && matrizJogo[i - 3][x] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            if (matrizJogo[i][x] === "p" && matrizJogo[i - 1][x] === "p" && matrizJogo[i - 2][x] === "p" && matrizJogo[i - 3][x] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
        }
    }
}

/* VERIFICACAO VERTICAL */
function vertical() {
    for (let i = 0; i < 6; i++) {
        for (let x = 0; x < 7; x++) {
            if (matrizJogo[i][x] === "v" && matrizJogo[i][x + 1] === "v" && matrizJogo[i][x + 2] === "v" && matrizJogo[i][x + 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            if (matrizJogo[i][x] === "v" && matrizJogo[i][x - 1] === "v" && matrizJogo[i][x - 2] === "v" && matrizJogo[i][x - 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            if (matrizJogo[i][x] === "p" && matrizJogo[i][x - 1] === "p" && matrizJogo[i][x - 2] === "p" && matrizJogo[i][x - 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
            if (matrizJogo[i][x] === "p" && matrizJogo[i][x - 1] === "p" && matrizJogo[i][x - 2] === "p" && matrizJogo[i][x - 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
        }
    }
}

/* VERIFICACAO DIAGONAL VITORIA VERMELHO */
function diagonalVermelha() {
    for (let i = 0; i < 6; i++) {
        for (let x = 0; x < 7; x++) {
            //direita baixo
            if (matrizJogo[i][x] === "v" && matrizJogo[i + 1][x + 1] === "v" && matrizJogo[i + 2][x + 2] === "v" && matrizJogo[i + 3][x + 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            //esquerda baixo
            if (matrizJogo[i][x] === "v" && matrizJogo[i - 1][x + 1] === "v" && matrizJogo[i - 2][x + 2] === "v" && matrizJogo[i - 3][x + 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            //direita cima
            if (matrizJogo[i][x] === "v" && matrizJogo[i + 1][x - 1] === "v" && matrizJogo[i + 2][x - 2] === "v" && matrizJogo[i + 3][x - 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            //esquerda cima
            if (matrizJogo[i][x] === "v" && matrizJogo[i - 1][x - 1] === "v" && matrizJogo[i - 2][x - 2] === "v" && matrizJogo[i - 3][x - 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }

        }
    }
}

/* VERIFICACAO DIAGONAL VITORIA PRETO */
function diagonalPreta() {
    for (let i = 0; i < 6; i++) {
        for (let x = 0; x < 7; x++) {
            //direita baixo
            if (matrizJogo[i][x] === "p" && matrizJogo[i + 1][x + 1] === "p" && matrizJogo[i + 2][x + 2] === "p" && matrizJogo[i + 3][x + 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
            //esquerda baixo
            if (matrizJogo[i][x] === "p" && matrizJogo[i - 1][x + 1] === "p" && matrizJogo[i - 2][x + 2] === "p" && matrizJogo[i - 3][x + 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
            //direita cima
            if (matrizJogo[i][x] === "p" && matrizJogo[i + 1][x - 1] === "v" && matrizJogo[i + 2][x - 2] === "v" && matrizJogo[i + 3][x - 3] === "v") {
                divResultado.appendChild(vitoriaPreto)
            }
            //esquerda cima
            if (matrizJogo[i][x] === "p" && matrizJogo[i - 1][x - 1] === "p" && matrizJogo[i - 2][x - 2] === "p" && matrizJogo[i - 3][x - 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }

        }
    }
}

/* VERIFICACAO EMPATE */
function verificarEmpate() {
    for (let i = 0; i < 6; i++) {
        for (let x = 0; x < 7; x++) {
            if (matrizJogo[i][x] == "") {
                return false
            }
        }
    }
    divResultado.appendChild(empate)
    return true
}

function verificaVitoria(i, j, vORp) { //linha, coluna, o ultimo parametro é dizendo se o elemento que vc está verificando é vermelho ou preto
    verificarEmpate()
    diagonalPreta()
    diagonalVermelha()
    horizontal()
    vertical()
}