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



function horizontal(i, j) {
    const elemento = matrizJogo[i];
    if (j >= 0 && j < 7) {
        if (elemento[j] === elemento[j + 1] && elemento[j] === elemento[j + 2] && elemento[j] === elemento[j + 3]) {
            console.log("temos um vencedor");
        }
        if (j >= 1) {
            if (elemento[j] === elemento[j - 1] && elemento[j] === elemento[j + 1] && elemento[j] === elemento[j + 2]) {
                console.log("temos um vencedor");
            }
            if (j >= 2) {
                if (elemento[j] === elemento[j - 2] && elemento[j] === elemento[j - 1] && elemento[j] === elemento[j + 1]) {
                    console.log("temos um vencedor");
                }
                if (j >= 3) {
                    if (elemento[j] === elemento[j - 3] && elemento[j] === elemento[j - 2] && elemento[j] === elemento[j - 1]) {
                        console.log("temos um vencedor");
                    }
                }
            }
        }
    }
}


