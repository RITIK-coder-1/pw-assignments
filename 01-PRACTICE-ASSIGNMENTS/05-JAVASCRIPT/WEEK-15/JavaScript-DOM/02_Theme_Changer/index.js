const body = document.body
const button = document.querySelector("#button")
const heading = document.querySelector("#heading")

button.addEventListener(("click"), () => {

    body.style.backgroundColor = "black"
    heading.textContent = "This is Dark Theme"
    heading.style.color = "white"

}, false)