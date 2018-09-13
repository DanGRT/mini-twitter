const formElement = document.querySelector("form")
formElement.addEventListener("submit", event => {
  event.preventDefault()
  console.log("default prevented")
})
