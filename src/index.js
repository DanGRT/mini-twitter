const formElement = document.querySelector("form")
const textBoxElement = document.querySelector(".user-text")
const timelineElement = document.querySelector(".timeline")
const characterCounterElement = document.querySelector(".character-counter")

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
  characterCounterElement.textContent = `0 / 280`
})




textBoxElement.addEventListener("input", event => {
  const currentCount = event.target.value.length
  characterCounterElement.textContent = `${currentCount} / 280`

})
