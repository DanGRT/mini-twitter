const formElement = document.querySelector("form")
const textBoxElement = document.querySelector(".user-text")
const timelineElement = document.querySelector(".timeline")
formElement.addEventListener("submit", event => {
  event.preventDefault()
  console.log("default prevented")
  const latestTweet = document.querySelector(".latest-tweet")
  const userInput = textBoxElement.value
  const newTweet = document.createElement("div")
  newTweet.setAttribute("class", "latest-tweet")
  newTweet.textContent = userInput
  timelineElement.insertBefore(newTweet, latestTweet)
  textBoxElement.value = ""





})
