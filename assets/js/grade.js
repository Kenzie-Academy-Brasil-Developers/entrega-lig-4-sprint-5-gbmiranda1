const corpo = document.getElementById("juego");

const cabeza = document.createElement("header");
corpo.appendChild(cabeza);

const titulo = document.createElement("h1");
titulo.innerText = "Liga 4";
cabeza.appendChild(titulo);

const principal = document.createElement("main");
principal.id = "principal";
corpo.appendChild(principal);

const pie = document.createElement("footer");
corpo.appendChild(pie);

const pieLegenda = document.createElement("p");
pieLegenda.innerText = "galubo q1 sprint 5";
pie.appendChild(pieLegenda);

const vezJogador = document.createElement("section");
vezJogador.id = "vezJogador";
principal.appendChild(vezJogador)

const grade = document.createElement("section");
grade.id = "grade";
principal.appendChild(grade);

const datos = document.createElement("section");
datos.id = "datos";
principal.appendChild(datos);

const starter = document.createElement("div");
starter.className = "popup-comecarJogo";
datos.appendChild(starter);

const starterBtn = document.createElement("div");
starterBtn.className = "popup-comecarJogo___botoes";
starter.appendChild(starterBtn);

const lblPlayer1 = document.createElement("label");
lblPlayer1.setAttribute("for", "jogador1");
lblPlayer1.innerText = "Digite o nome do Jogador 1: ";
starterBtn.appendChild(lblPlayer1);

const nomePlayer1 = document.createElement("input");
nomePlayer1.type = "text";
nomePlayer1.id = "jogador1";
starterBtn.appendChild(nomePlayer1);

const lblPlayer2 = document.createElement("label");
lblPlayer2.setAttribute("for", "jogador2");
lblPlayer2.innerText = "Digite o nome do Jogador 2: ";
starterBtn.appendChild(lblPlayer2);

const nomePlayer2 = document.createElement("input");
nomePlayer2.type = "text";
nomePlayer2.id = "jogador2";
starterBtn.appendChild(nomePlayer2);

const btnStart = document.createElement("button");
btnStart.id = "iniciarJogo";
btnStart.innerText = "Iniciar Jogo";
starterBtn.appendChild(btnStart);

let jogador1
let jogador2

document.querySelector("#iniciarJogo").addEventListener("click", pegarValue)
const mensaje = document.createElement("h2");

function pegarValue() {
    jogador1 = document.querySelector("#jogador1").value
    jogador2 = document.querySelector("#jogador2").value


    vezJogador.appendChild(mensaje);
    mensaje.innerText = ""
    if (jogador1 != "") {
        mensaje.innerText = "Vez de " + jogador1
    } else {
        mensaje.innerText = "Vez do jogador VERMELHO"
    }
    let div = document.querySelector(".popup-comecarJogo")
    div.style.display = "none"
}


let idColunas = ["a", "b", "c", "d", "e", "f", "g"]
let cont = 1

function criarTabuleiro() {
    for (let i = 0; i < 7; i++) {
        const divLinha = document.createElement("div")
        divLinha.id = idColunas[i]
        divLinha.classList.add("coluna")
        for (let j = 0; j < 6; j++) {
            const divColuna = document.createElement("div")
            divColuna.id = cont + "";
            cont++
            divColuna.classList.add("celda")
            divLinha.addEventListener("click", criarDisco)
            divLinha.appendChild(divColuna)
        }
        grade.appendChild(divLinha)
    }
}
criarTabuleiro()

const btnReset = document.createElement("button");
btnReset.type = "reset";
btnReset.className = "reset";
btnReset.id = "reset";
btnReset.innerText = "Reset";
datos.appendChild(btnReset);

const victoryScreen = document.createElement("div");
victoryScreen.className = "telaVitoria";
victoryScreen.id = "telaVitoria";
datos.appendChild(victoryScreen);

const victoryLink = document.createElement("div");
victoryLink.className = "linkVitoria";
victoryScreen.appendChild(victoryLink);

const btnExit = document.createElement("button");
btnExit.className = "sair";
btnExit.innerText = "X";
victoryLink.appendChild(btnExit);

const victoryMessage = document.createElement("h3");
victoryMessage.id = "texto-vitoria";
victoryLink.appendChild(victoryMessage);
