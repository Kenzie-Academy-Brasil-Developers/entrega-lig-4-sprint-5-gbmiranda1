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

const vitoria = document.createElement("section");
vitoria.id = "vitoria";
principal.appendChild(vitoria)

const mensaje = document.createElement("h2");
vitoria.appendChild(mensaje);
mensaje.innerText = "Você venceu!"

const grade = document.createElement("section");
grade.id = "grade";
principal.appendChild(grade);

const datos = document.createElement("section");
datos.id = "datos";
principal.appendChild(datos);

function Celda(i, str){
    this.celda = document.createElement("div");
    this.celda.id = i + 1;
    this.celda.className = str;
}

function Coluna(i, str){
    this.coluna = document.createElement("div");
    this.coluna.id = String.fromCharCode(97 + i);
    this.coluna.className = str;
}

const colunas = [];

function criaColunas(n, str, array) {
    for (let i = 0; i < n; i++) {
        array[i] = new Coluna(i, str);
    }
    return array;
}

criaColunas(7, "coluna", colunas);

function dibujaColunas(array, tag) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tag.appendChild(element.coluna);
    }
}

dibujaColunas(colunas, grade);

const coluna01 = [];
const coluna02 = [];
const coluna03 = [];
const coluna04 = [];
const coluna05 = [];
const coluna06 = [];
const coluna07 = [];

function criaCeldas(n, str, array) {
    for (let i = n; i < n + 6; i++) {
        array[i - n] = new Celda(i, str);
    }
    return array;
}

criaCeldas(0, "celda", coluna01);
criaCeldas(6, "celda", coluna02);
criaCeldas(12, "celda", coluna03);
criaCeldas(18, "celda", coluna04);
criaCeldas(24, "celda", coluna05);
criaCeldas(30, "celda", coluna06);
criaCeldas(36, "celda", coluna07);

const colunaA = document.getElementById("a");
const colunaB = document.getElementById("b");
const colunaC = document.getElementById("c");
const colunaD = document.getElementById("d");
const colunaE = document.getElementById("e");
const colunaF = document.getElementById("f");
const colunaG = document.getElementById("g");

function dibujaCeldas(array, tag) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tag.appendChild(element.celda);
    }
}


dibujaCeldas(coluna01, colunaA);
dibujaCeldas(coluna02, colunaB);
dibujaCeldas(coluna03, colunaC);
dibujaCeldas(coluna04, colunaD);
dibujaCeldas(coluna05, colunaE);
dibujaCeldas(coluna06, colunaF);
dibujaCeldas(coluna07, colunaG);