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

function Celda(i, str) {
    this.celda = document.createElement("div");
    this.celda.id = i + 1;
    this.celda.className = str;
}

function Fila(i, str) {
    this.fila = document.createElement("div");
    this.fila.id = String.fromCharCode(97 + i);
    this.fila.className = str;
}

const filas = [];

function criaFilas(n, str, array) {
    for (let i = 0; i < n; i++) {
        array[i] = new Fila(i, str);
    }
    return array;
}

criaFilas(6, "fila", filas);

function dibujaFilas(array, tag) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tag.appendChild(element.fila);
    }
}

dibujaFilas(filas, grade);

const fila01 = [];
const fila02 = [];
const fila03 = [];
const fila04 = [];
const fila05 = [];
const fila06 = [];


function criaCeldas(n, str, array) {
    for (let i = n; i < n + 7; i++) {
        array[i - n] = new Celda(i, str);
    }
    return array;
}

criaCeldas(0, "celda", fila01);
criaCeldas(7, "celda", fila02);
criaCeldas(14, "celda", fila03);
criaCeldas(21, "celda", fila04);
criaCeldas(28, "celda", fila05);
criaCeldas(35, "celda", fila06);

const filaA = document.getElementById("a");
const filaB = document.getElementById("b");
const filaC = document.getElementById("c");
const filaD = document.getElementById("d");
const filaE = document.getElementById("e");
const filaF = document.getElementById("f");

function dibujaCeldas(array, tag) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tag.appendChild(element.celda);
    }
}


dibujaCeldas(fila01, filaA);
dibujaCeldas(fila02, filaB);
dibujaCeldas(fila03, filaC);
dibujaCeldas(fila04, filaD);
dibujaCeldas(fila05, filaE);
dibujaCeldas(fila06, filaF);