const formElement = document.querySelector("form")
const textBoxElement = document.querySelector(".user-text")
const timelineElement = document.querySelector(".timeline")
const characterCounterElement = document.querySelector(".character-counter")
const submitButtonElement = document.querySelector(".submit-button")

//when submit is clicked, add tweet to timeline
formElement.addEventListener("submit", event => {
  event.preventDefault()
  console.log("default prevented")
  const latestTweet = document.querySelector(".latest-tweet")
  const userInput = textBoxElement.value

  const newTweet = document.createElement("div")
  newTweet.setAttribute("class", "latest-tweet")
  newTweet.textContent = userInput

  const deleteIconElement = document.createElement("button")
  deleteIconElement.textContent = "delete"
  newTweet.appendChild(deleteIconElement)
  deleteIconElement.addEventListener("click", event => {
    timelineElement.removeChild(newTweet)
  })


  timelineElement.insertBefore(newTweet, latestTweet)
  textBoxElement.value = ""
  characterCounterElement.textContent = `0 / 280`
  characterCounterElement.style.color = "black"
})



//updates character counter
textBoxElement.addEventListener("input", event => {
  const currentCount = event.target.value.length
  characterCounterElement.textContent = `${currentCount} / 280`
  if (currentCount > 280){
    characterCounterElement.style.color = "red"
    submitButtonElement.disabled = true
  }else{
    characterCounterElement.style.color = "black"
    submitButtonElement.disabled = false
  }

})


//Add a delete icon to each tweet.
//On click, it should remove the corresponding tweet from the timeline.
