function mostrarPopUp (mostrarTela) {
    const popup = document.getElementById(mostrarTela)
    popup.classList.add("visivel")
    popup.addEventListener("click", (e) => {
        if (e.target.id === mostrarTela || e.target.className === "sair") {
            popup.classList.remove("visivel")
        }
    })
}

// TESTE PARA O POPUP, SO DESCOMENTAR
//mostrarPopUp("telaVitoria")