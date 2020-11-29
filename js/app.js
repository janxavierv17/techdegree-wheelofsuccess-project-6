//The Phrase Array.
let phrases = ["NARTUO SHIPPUDEN", "DRAGON BALL Z", "BLEACH", "ATTACK ON TITAN", "RAMEN"];

//Used to keep track of the number of guesses that players has missed.
let missed = 0;
let phrase = document.getElementById("phrase");
let qwerty = document.getElementById("qwerty");
let overlay = document.querySelector("#overlay");

let buttons = document.getElementsByTagName("button");
let tries = document.querySelectorAll(".tries img")

//Hides the start screen overlay.
overlay.addEventListener("click", (e)=>{
    if(e.target.tagName === "A"){
        overlay.style.display="none";
    }
})

//A resuable function with "arr" parameter that returns a set of characters from the phrases array.
function getRandomPhraseAsArray(arr){
    //Choose random phrase.
    let randomNumber = Math.floor(Math.random()*5)
    let randomPhrase = arr[randomNumber].split("")
    return randomPhrase;
}

let phraseArray = getRandomPhraseAsArray(phrases)

function addPhraseToDisplay(arr){
    let ul = document.querySelector("ul");
    arr.forEach((item) => {
        let li = document.createElement("li");
        li.textContent=item.split("");
        if(li.textContent === " "){
            li.className = "space"
        }else if(li.textContent==""){
            li.className = "space"
        }else{
            li.className="letter";
        }
        ul.appendChild(li)
    })
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));

let letters = document.querySelectorAll(".letter");
function checkLetter(button){
    //false doesn't work for some reason and I'm not sure why ...
    let match = null;
    for(let i = 0; i < letters.length; i++){
        let letterArray = letters[i].textContent.toLowerCase();
        let buttonText = button.textContent;
        if(letterArray === buttonText){
            letters[i].className = "show letter";
            match = true;
        }
    }
    return match;
}

checkLetter(buttons)
qwerty.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON"){
        e.target.className = "chosen";
        e.target.disabled = "true";

        checkLetter(e.target)
        let letterFound = checkLetter(e.target)
        if(letterFound === null){
            missed += 1;
            tries[missed - 1].src = "images/lostHeart.png"
        }
    }
    checkWin();
})


function checkWin(){
    let show = document.getElementsByClassName("show");
    //Checks if the number of letters with class show is equal to the number of letters.
    if(letters.length === show.length){
        overlay.className = "win";
        overlay.style.display=""
        document.querySelector("h2").textContent = "You win!"
        console.log(overlay)
    }else if(missed >=5){
        overlay.className = "lose";
        overlay.style.display=""
        document.querySelector("h2").textContent = "You lose!"
    }
}