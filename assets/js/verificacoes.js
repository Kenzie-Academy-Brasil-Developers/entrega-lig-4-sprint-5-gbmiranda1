const divResultado = document.createElement("div")
const vitoriaPreto = document.createElement("p")
vitoriaPreto.innerText = "Vitoria do jogador Preto"
const vitoriaVermelho = document.createElement("p")
vitoriaVermelho.innerText = "Vitoria do jogador Vermelho"
const empate = document.createElement("p")
empate.innerText = "O jogo terminou em empate"
body.appendChild(divResultado)


/* VERIFICACAO HORIZONTAL */
function horizontal () {
    for (let i = 0; i < 7; i++) {
        for(let x = 0; x < 6; x++) {
            if (matriz[i][x] === "v" && matriz[i + 1][x] === "v" && matriz[i + 2][x] === "v" && matriz[i - 3][x] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            if (matriz[i][x] === "p" && matriz[i + 1][x] === "p" && matriz[i + 2][x] === "p" && matriz[i - 3][x] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
            if (matriz[i][x] === "v" && matriz[i - 1][x] === "v" && matriz[i - 2][x] === "v" && matriz[i - 3][x] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            if (matriz[i][x] === "p" && matriz[i - 1][x] === "p" && matriz[i - 2][x] === "p" && matriz[i - 3][x] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
        }
    }
}

/* VERIFICACAO VERTICAL */
function vertical () {
    for (let i = 0; i < 7; i++) {
        for(let x = 0; x < 6; x++) {
            if (matriz[i][x] === "v" && matriz[i][x + 1] === "v" && matriz[i][x + 2] === "v" && matriz[i][x + 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            if (matriz[i][x] === "v" && matriz[i][x - 1] === "v" && matriz[i][x - 2] === "v" && matriz[i][x - 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            if (matriz[i][x] === "p" && matriz[i][x - 1] === "p" && matriz[i][x - 2] === "p" && matriz[i][x - 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
            if (matriz[i][x] === "p" && matriz[i][x - 1] === "p" && matriz[i][x - 2] === "p" && matriz[i][x - 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
        }
    }
}

/* VERIFICACAO DIAGONAL VITORIA VERMELHO */
function diagonalVermelha () {
    for (let i = 0; i < 7; i++) {
        for(let x = 0; x < 6; x++) {
            //direita baixo
            if (matriz[i][x] === "v" && matriz[i + 1][x + 1] === "v" && matriz[i + 2][x + 2] === "v" && matriz[i + 3][x + 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            //esquerda baixo
            if (matriz[i][x] === "v" && matriz[i - 1][x + 1] === "v" && matriz[i - 2][x + 2] === "v" && matriz[i - 3][x + 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            //direita cima
            if (matriz[i][x] === "v" && matriz[i + 1][x - 1] === "v" && matriz[i + 2][x - 2] === "v" && matriz[i + 3][x - 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }
            //esquerda cima
            if (matriz[i][x] === "v" && matriz[i - 1][x - 1] === "v" && matriz[i - 2][x - 2] === "v" && matriz[i - 3][x - 3] === "v") {
                divResultado.appendChild(vitoriaVermelho)
            }

        }
    }    
}

/* VERIFICACAO DIAGONAL VITORIA PRETO */
function diagonalPreta () {
    for (let i = 0; i < 7; i++) {
        for(let x = 0; x < 6; x++) {
            //direita baixo
            if (matriz[i][x] === "p" && matriz[i + 1][x + 1] === "p" && matriz[i + 2][x + 2] === "p" && matriz[i + 3][x + 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
            //esquerda baixo
            if (matriz[i][x] === "p" && matriz[i - 1][x + 1] === "p" && matriz[i - 2][x + 2] === "p" && matriz[i - 3][x + 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }
            //direita cima
            if (matriz[i][x] === "p" && matriz[i + 1][x - 1] === "v" && matriz[i + 2][x - 2] === "v" && matriz[i + 3][x - 3] === "v") {
                divResultado.appendChild(vitoriaPreto)
            }
            //esquerda cima
            if (matriz[i][x] === "p" && matriz[i - 1][x - 1] === "p" && matriz[i - 2][x - 2] === "p" && matriz[i - 3][x - 3] === "p") {
                divResultado.appendChild(vitoriaPreto)
            }

        }
    }   
}

/* VERIFICACAO EMPATE */
function empate () {
    for (let i = 0; i < 7; i++) {
        for(let x = 0; x < 6; x++) {
            if (matriz[i][x] == "") {
                return false
            }
        }
    }
    divResultado.appendChild(empate)
    return true
}

function verificaVitoria () {
    empate()
    diagonalPreta()
    diagonalVermelha()
    horizontal()
    vertical()
}
