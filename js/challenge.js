const counter = document.getElementById('counter');
let startingTime = 0; 

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit')
const form = document.getElementById('comment-form');
const commentContainer = document.getElementById('list')
let likeInfo = document.querySelector('.likes');
const numLikes = {   
}

let interval = setInterval(updateCounter, 1000);

function updateCounter() {
    counter.innerHTML = startingTime++
}

function decreaseCounter() {
    counter.innerHTML = startingTime -= 1
}

function increaseCounter() {
    counter.innerText = startingTime += 1
}

function addLikes() {
    const li = document.createElement('li')
    li.id = startingTime

    if (startingTime in numLikes) {
        numLikes[startingTime] += 1
        const likes = document.getElementById(startingTime)
        likes.innerText = `${startingTime} was liked ${numLikes[startingTime]} times`
    }
    else {
        numLikes[startingTime] = 1
        li.innerText = `${startingTime} was liked 1 time`
        likeInfo.append(li)
    }
}

function pauseTimer() {
    if(pauseButton.innerText == 'resume') {
        interval = setInterval(updateCounter, 1000)
        pauseButton.innerText = 'pause'
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
    }
    else {
        clearInterval(interval)
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;
        pauseButton.innerText = 'resume'
    }
}
function submitComment(event) {
    event.preventDefault();
    let input = document.getElementById('comment-input')
    const p = document.createElement('p')
    p.innerText = input.value
    commentContainer.append(p)
}

addEventListener('DOMContentLoaded', updateCounter)
minusButton.addEventListener('click', decreaseCounter)
plusButton.addEventListener('click', increaseCounter)
heartButton.addEventListener('click', addLikes)
pauseButton.addEventListener('click', pauseTimer)
form.addEventListener('submit', submitComment)



//for the form... select form and the event is 'submit... also use .prevent to stop from reloading