import Modal from "./modal.js"

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal .buttons button")

//pegar todos os botões que contém a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //add a escuta do evento
    button.addEventListener("click", handleClick)
})

//pegar quando o marcar como lido for clicado


const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    const roomId = document.querySelector("#room-id").dataset.id
    const slug = check ? "check" : "delete"
    const questionId = event.target.dataset.id

    const modalForm = document.querySelector(".modal form")
    modalForm.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` 
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    //abrir modal
    event.preventDefault()
    modal.open()
}
