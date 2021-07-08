const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textBox = document.querySelector(".letter");
const progressParagraph = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const displayRemainingGuess = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again hide");


const word = "magnolia"



/* Write a function to Add Placeholders for Each Letter */

const placeholder = function (word){
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●")
        
    }

    progressParagraph.innerText = placeholderLetters.join("");


};


placeholder(word);


guessButton.addEventListener("click", function (e){
    e.preventDefault();
    const guess = textBox.value;
    console.log(guess);
});
