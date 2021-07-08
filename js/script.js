const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const textBox = document.querySelector(".letter");
const progressParagraph = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const displayRemainingGuess = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again hide");


const word = "magnolia";
const guessedLetters = [];


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
    // console.log(textBox.value);
    message.innerText = "";

  
    const goodGuess = playerInput(guess);

    if (goodGuess){
        makeGuess(guess);
    }
    textBox.value = "";
    console.log(goodGuess);
    
});

const playerInput = function (input){

    const acceptedLetter = /[a-zA-Z]/;
    if (input.length ===0){
        message.innerText = "Please enter a letter"
    }else if(input.length>1){
        message.innerText = "please enter one letter only"
    }else if (!input.match(acceptedLetter)){
        message.innerText =  "Please enter a valid letter A-Z"
    } else {
        return input;
    }
    
};

const makeGuess = function (guess){
    guess = guess.toUpperCase();
    if(guessedLetters.includes(guess)){
        message.innerText =  "You have already guessed that letter.Try again";
    } else {

        guessedLetters.push(guess);
        showGuessedLetters();
        console.log(guessedLetters);
        updateWordInProgress(guessedLetters);
    }
};


const showGuessedLetters = function (){
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters){
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);

        

    }
}

const updateWordInProgress = function (guessedLetters){
const wordUpper = word.toUpperCase();
const wordArray = wordUpper.split("");
console.log(wordArray);

const revealWord = [];
for (const letter of wordArray) {
    if (guessedLetters.includes(letter)){
    revealWord.push(letter.toUpperCase());
}else{
    revealWord.push("●");

}
}

progressParagraph.innerText = revealWord.join("");
win();

};

const win = function (){
    if(word.toUpperCase()===progressParagraph.innerText){
        message.classList.add("win");
        message.innerHTML = `<p class = highllight">You guessed the correct word!!!!!!YAY!!!</p>`;

    }
}
