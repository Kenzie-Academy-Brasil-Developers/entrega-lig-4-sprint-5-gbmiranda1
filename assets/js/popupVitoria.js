function mostrarPopUp(mostrarTela, texto) {

    const popup = document.getElementById(mostrarTela)
    const h3 = document.getElementById("texto-vitoria")
    h3.classList.add("texto-da-vitoria")
    h3.innerText = texto

    popup.classList.add("visivel")

    popup.addEventListener("click", (e) => {
        if (e.target.id === mostrarTela) {
            popup.classList.remove("visivel")
            let div = document.querySelector(".popup-comecarJogo")
            div.style.display = "flex"

        } else if (e.target.className === "sair") {
            popup.classList.remove("visivel")
            let div = document.querySelector(".popup-comecarJogo")
            div.style.display = "flex"
        }
    })


}



// TESTE PARA O POPUP, SO DESCOMENTAR
//mostrarPopUp("telaVitoria")