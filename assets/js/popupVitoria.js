function mostrarPopUp(mostrarTela, texto) {
    const popup = document.getElementById(mostrarTela)
    const h3 = document.getElementById("texto-vitoria")
    h3.classList.add("texto-da-vitoria")
    h3.innerText = texto
    popup.classList.add("visivel")
    popup.addEventListener("click", (e) => {
        if (e.target.id === mostrarTela || e.target.className === "sair") {
            popup.classList.remove("visivel")
        }
    })
}

// TESTE PARA O POPUP, SO DESCOMENTAR
mostrarPopUp("telaVitoria")