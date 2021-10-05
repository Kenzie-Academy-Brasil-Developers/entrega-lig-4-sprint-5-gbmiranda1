/* VERIFICACAO HORIZONTAL*/

function verificarVitoriaHorizontal(i, j, vORp) {
    const elemento = matrizJogo[i];
    if (j + 3 < 7) {
        if (elemento[j] === vORp && elemento[j + 1] === vORp && elemento[j + 2] === vORp && elemento[j + 3] === vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal1");
            return true;
        }
    }
    if (j - 1 >= 0 && j + 2 < 7) {
        if (elemento[j - 1] === vORp && elemento[j] === vORp && elemento[j + 1] === vORp && elemento[j + 2] === vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal2");
            return true;
        }
    }
    if (j - 2 >= 0 && j + 1 < 7) {
        if (elemento[j - 2] === vORp && elemento[j - 1] === vORp && elemento[j] === vORp && elemento[j + 1] === vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal3");
            return true;
        }
    }
    if (j - 3 >= 0) {
        if (elemento[j] === vORp && elemento[j - 1] === vORp && elemento[j - 2] === vORp && elemento[j - 3] === vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal4");
            return true;
        }
    }
}



/* VERIFICACAO VERTICAL */
function verificarVitoriaVertical(i, j, vORp) {
    if (i + 3 <= 5) {
        if (matrizJogo[i][j] === vORp && matrizJogo[i + 1][j] === vORp && matrizJogo[i + 2][j] === vORp && matrizJogo[i + 3][j] === vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Vertical")
            return true
        }
    }
}

/* VERIFICACAO DIAGONAL VITORIA VERMELHO */
function verificarVitoriaDiagonal(i, j, vORp) {
    if (i + 3 < 6 && j + 3 < 7) {
        if (matrizJogo[i + 1][j + 1] == vORp && matrizJogo[i + 2][j + 2] == vORp && matrizJogo[i + 3][j + 3] == vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal")
            return true
        }
    }
    if (i - 3 >= 0 && j - 3 >= 0) {
        if (matrizJogo[i - 1][j - 1] == vORp && matrizJogo[i - 2][j - 2] == vORp && matrizJogo[i - 3][j - 3] == vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal")
            console.log("sim 1")
            return true
        }
    }

    if (i + 3 < 6 && j - 3 >= 0) {
        if (matrizJogo[i + 1][j - 1] == vORp && matrizJogo[i + 2][j - 2] == vORp && matrizJogo[i + 3][j - 3] == vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal")
            console.log("sim 2")
            return true
        }
    }
    if (i - 3 >= 0 && j + 3 < 7) {
        if (matrizJogo[i - 1][j + 1] == vORp && matrizJogo[i - 2][j + 2] == vORp && matrizJogo[i - 3][j + 3] == vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal")
            console.log("sim 3")
            return true
        }
    }
    if (i + 1 < 6 && i - 2 >= 0 && j + 1 < 7 && j - 2 >= 0) {
        if (matrizJogo[i + 1][j + 1] == vORp && matrizJogo[i - 1][j - 1] == vORp && matrizJogo[i - 2][j - 2] == vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal")
            console.log("sim 4")
            return true
        }
    }
    if (i + 2 < 6 && i - 1 >= 0 && j + 2 < 7 && j - 1 >= 0) {
        if (matrizJogo[i + 1][j + 1] == vORp && matrizJogo[i + 2][j + 2] == vORp && matrizJogo[i - 1][j - 1] == vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal")
            console.log("sim 5")
            return true
        }
    }
    if (i - 2 >= 0 && j + 2 > 7 && i + 1 < 6 && j - 1 >= 0) {
        if (matrizJogo[i + 1][j - 1] == vORp && matrizJogo[i - 1][j + 1] == vORp && matrizJogo[i - 2][j + 2] == vORp) {
            mostrarPopUp("telaVitoria", "Ganhou na Horizontal")
            console.log("sim 6")
            return true
        }
    }
    if ((i - 1) >= 0 && (j + 1) < 7 && (i + 2) < 6 && (j - 2) >= 0) {
        if (matrizJogo[i - 1][j + 1] == vORp && matrizJogo[i + 1][j - 1] == vORp && matrizJogo[i + 2][j - 2] == vORp) {

            console.log("sim 7")
            return true


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
    mostrarPopUp("telaVitoria", "EMPATOU")
    return true
}

function verificaVitoria(i, j, vORp) { //linha, coluna, o ultimo parametro é dizendo se o elemento que vc está verificando é vermelho ou preto
    setInterval(function() {
        if (verificarVitoriaDiagonal(i, j, vORp) || verificarVitoriaVertical(i, j, vORp) || verificarVitoriaHorizontal(i, j, vORp) || verificarEmpate()) {
            jogador = true
            reiniciar()
            return true

        } else {
            return false
        }
    }, 500);

}