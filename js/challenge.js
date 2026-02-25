// const { useEffect } = require("react")

let isPaused = false
let timeInterval = setInterval ( incrementCounter, 1000)
const submit = document.getElementById("submit")

const counter = document.querySelector("#counter")
function incrementCounter () {

    counter.textContent = parseInt(counter.textContent, 10) + 1

}




const form = document.getElementById("comment-form")

function makeComment (comment) {
    const commentsLi = document.getElementById("list")

    const li = document.createElement("li")
    li.textContent  = comment

    commentsLi.appendChild(li)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    makeComment(e.target.comment.value)

    e.target.reset()
})








const like = document.querySelector("#heart")    

like.addEventListener("click", () => {
    const likes = document.querySelector(".likes")
    
    const likeText = document.createElement("li")
    likeText.textContent = `${counter.textContent} has been liked 1 time.`
    likes.append(likeText)
})


const minus = document.querySelector("#minus")

minus.addEventListener("click", () => {
    counter.textContent  = parseInt(counter.textContent) - 1
})

const plus = document.querySelector("#plus")

plus.addEventListener("click", () => {
    counter.textContent  = parseInt(counter.textContent) + 1
})

const pausePlay = document.getElementById("pause")




pausePlay.addEventListener("click", () => {

    isPaused = !isPaused
    if (isPaused){   
    clearInterval(timeInterval)

    pausePlay.textContent = "Play"
    plus.disabled = true 
    like.disabled = true
    minus.disabled = true
    submit.disabled = true

    }else{


        timeInterval = setInterval(incrementCounter, 1000)
        pause.textContent === "Pause" 
        plus.disabled =  false 
        like.disabled = false
        minus.disabled = false
        submit.disabled = false




    }


})
