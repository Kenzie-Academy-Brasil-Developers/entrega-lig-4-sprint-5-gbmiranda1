const divResultado = document.createElement("div")
const vitoriaPreto = document.createElement("p")
vitoriaPreto.innerText = "Vitoria do jogador Preto"
const vitoriaVermelho = document.createElement("p")
vitoriaVermelho.innerText = "Vitoria do jogador Vermelho"
const empate = document.createElement("p")
empate.innerText = "O jogo terminou em empate"
const body = document.querySelector("body")
body.appendChild(divResultado)


/* VERIFICACAO HORIZONTAL*/


function horizontalDireita(fila, coluna) {
    for (let i = coluna; i < coluna + 4; i++) {
        const elemento = matrizJogo[fila];
        if (elemento[i] === elemento[i + 1] && elemento[i] === elemento[i + 2] && elemento[i] === elemento[i + 3]) {
            console.log("temos um vencedor");
            break;
        } else {
            console.log("continue jogando");
            break;
        }
    }
}

function horizontal1Direita(fila, coluna) {
    for (let i = coluna - 1; i < coluna + 3; i++) {
        const elemento = matrizJogo[fila];
        if (elemento[i] === elemento[i + 1] && elemento[i] === elemento[i + 2] && elemento[i] === elemento[i + 3]) {
            console.log("temos um vencedor");
            break;
        } else {
            console.log("continue jogando");
            break;
        }
    }
}

function horizontal2Direita(fila, coluna) {
    for (let i = coluna - 2; i < coluna + 2; i++) {
        const elemento = matrizJogo[fila];
        if (elemento[i] === elemento[i + 1] && elemento[i] === elemento[i + 2] && elemento[i] === elemento[i + 3]) {
            console.log("temos um vencedor");
            break;
        } else {
            console.log("continue jogando");
            break;
        }
    }
}

function horizontal3Direita(fila, coluna) {
    for (let i = coluna - 3; i < coluna + 1; i++) {
        const elemento = matrizJogo[fila];
        if (elemento[i] === elemento[i + 1] && elemento[i] === elemento[i + 2] && elemento[i] === elemento[i + 3]) {
            console.log("temos um vencedor");
            break;
        } else {
            console.log("continue jogando");
            break;
        }
    }
}

function horizontal(fila, coluna) {
    if (coluna === 0) {
        horizontalDireita(fila,coluna);
    }
    if (coluna < 0 && coluna <= 3) {
        horizontal1Direita(fila, coluna);
    }
    if (coluna) {
        
    }
}

// function horizontal() {
//     for (let i = 0; i < 6; i++) {
//         for (let x = 0; x < 7; x++) {
//             if (matrizJogo[i][x] === "v" && matrizJogo[i + 1][x] === "v" && matrizJogo[i + 2][x] === "v" && matrizJogo[i + 3][x] === "v") {
//                 divResultado.appendChild(vitoriaVermelho)
//             }
//             if (matrizJogo[i][x] === "p" && matrizJogo[i + 1][x] === "p" && matrizJogo[i + 2][x] === "p" && matrizJogo[i + 3][x] === "p") {
//                 divResultado.appendChild(vitoriaPreto)
//             }
//             if (matrizJogo[i][x] === "v" && matrizJogo[i - 1][x] === "v" && matrizJogo[i - 2][x] === "v" && matrizJogo[i - 3][x] === "v") {
//                 divResultado.appendChild(vitoriaVermelho)
//             }
//             if (matrizJogo[i][x] === "p" && matrizJogo[i - 1][x] === "p" && matrizJogo[i - 2][x] === "p" && matrizJogo[i - 3][x] === "p") {
//                 divResultado.appendChild(vitoriaPreto)
//             }
//         }
//     }
// }

/* VERIFICACAO VERTICAL */
// function vertical() {
//     for (let i = 0; i < 6; i++) {
//         for (let x = 0; x < 7; x++) {
//             if (matrizJogo[i][x] === "v" && matrizJogo[i][x + 1] === "v" && matrizJogo[i][x + 2] === "v" && matrizJogo[i][x + 3] === "v") {
//                 divResultado.appendChild(vitoriaVermelho)
//             }
//             if (matrizJogo[i][x] === "v" && matrizJogo[i][x - 1] === "v" && matrizJogo[i][x - 2] === "v" && matrizJogo[i][x - 3] === "v") {
//                 divResultado.appendChild(vitoriaVermelho)
//             }
//             if (matrizJogo[i][x] === "p" && matrizJogo[i][x - 1] === "p" && matrizJogo[i][x - 2] === "p" && matrizJogo[i][x - 3] === "p") {
//                 divResultado.appendChild(vitoriaPreto)
//             }
//             if (matrizJogo[i][x] === "p" && matrizJogo[i][x - 1] === "p" && matrizJogo[i][x - 2] === "p" && matrizJogo[i][x - 3] === "p") {
//                 divResultado.appendChild(vitoriaPreto)
//             }
//         }
//     }
// }

/* VERIFICACAO DIAGONAL VITORIA VERMELHO */
// function diagonalVermelha() {
//     for (let i = 0; i < 6; i++) {
//         for (let x = 0; x < 7; x++) {
//             //direita baixo
//             if (matrizJogo[i][x] === "v" && matrizJogo[i + 1][x + 1] === "v" && matrizJogo[i + 2][x + 2] === "v" && matrizJogo[i + 3][x + 3] === "v") {
//                 divResultado.appendChild(vitoriaVermelho)
//             }
//             //esquerda baixo
//             if (matrizJogo[i][x] === "v" && matrizJogo[i - 1][x + 1] === "v" && matrizJogo[i - 2][x + 2] === "v" && matrizJogo[i - 3][x + 3] === "v") {
//                 divResultado.appendChild(vitoriaVermelho)
//             }
//             //direita cima
//             if (matrizJogo[i][x] === "v" && matrizJogo[i + 1][x - 1] === "v" && matrizJogo[i + 2][x - 2] === "v" && matrizJogo[i + 3][x - 3] === "v") {
//                 divResultado.appendChild(vitoriaVermelho)
//             }
//             //esquerda cima
//             if (matrizJogo[i][x] === "v" && matrizJogo[i - 1][x - 1] === "v" && matrizJogo[i - 2][x - 2] === "v" && matrizJogo[i - 3][x - 3] === "v") {
//                 divResultado.appendChild(vitoriaVermelho)
//             }

//         }
//     }
// }

/* VERIFICACAO DIAGONAL VITORIA PRETO */
// function diagonalPreta() {
//     for (let i = 0; i < 6; i++) {
//         for (let x = 0; x < 7; x++) {
//             //direita baixo
//             if (matrizJogo[i][x] === "p" && matrizJogo[i + 1][x + 1] === "p" && matrizJogo[i + 2][x + 2] === "p" && matrizJogo[i + 3][x + 3] === "p") {
//                 divResultado.appendChild(vitoriaPreto)
//             }
//             //esquerda baixo
//             if (matrizJogo[i][x] === "p" && matrizJogo[i - 1][x + 1] === "p" && matrizJogo[i - 2][x + 2] === "p" && matrizJogo[i - 3][x + 3] === "p") {
//                 divResultado.appendChild(vitoriaPreto)
//             }
//             //direita cima
//             if (matrizJogo[i][x] === "p" && matrizJogo[i + 1][x - 1] === "v" && matrizJogo[i + 2][x - 2] === "v" && matrizJogo[i + 3][x - 3] === "v") {
//                 divResultado.appendChild(vitoriaPreto)
//             }
//             //esquerda cima
//             if (matrizJogo[i][x] === "p" && matrizJogo[i - 1][x - 1] === "p" && matrizJogo[i - 2][x - 2] === "p" && matrizJogo[i - 3][x - 3] === "p") {
//                 divResultado.appendChild(vitoriaPreto)
//             }

//         }
//     }
// }

/* VERIFICACAO EMPATE */
// function verificarEmpate() {
//     for (let i = 0; i < 6; i++) {
//         for (let x = 0; x < 7; x++) {
//             if (matrizJogo[i][x] == "") {
//                 return false
//             }
//         }
//     }
//     divResultado.appendChild(empate)
//     return true
// }

// function verificaVitoria() {
//     verificarEmpate()
//     diagonalPreta()
//     diagonalVermelha()
//     horizontal()
//     vertical()
// }