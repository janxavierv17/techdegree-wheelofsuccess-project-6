//The Phrase Array.
let phrases = ["Jan Xavier Virgen", "Lyka Carillo Barnum", "Karl Nino Morres", "Karlo Nino Morres", "Kyrie Nino Morres"]

//Used to keep track of the number of guesses that players has missed.
let missed = 0;
let phrase = document.getElementById("phrase");
let qwerty = document.getElementById("qwerty");
let overlay = document.getElementById("overlay");
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
    return randomPhrase
}

let phraseArray = getRandomPhraseAsArray(phrases)

function addPhraseToDisplay(arr){
    let ul = document.querySelector("ul");
    arr.forEach((item,index,array) => {
        let li = document.createElement("li");
        li.textContent=item;
        ul.appendChild(li)
    })
    return li;
}

console.log("Phrase Array: ", addPhraseToDisplay(phraseArray));