const programmingWords = [
  "javascript",
  "hangman",
  "programming",
  "developer",
  "computer",
];
const movieWords = ["inception", "gladiator", "titanic", "avatar", "matrix"];
const animalWords = ["elephant", "giraffe", "kangaroo", "dolphin", "penguin"];
const maxLives = 6;
let selectedWord;
let lives;
let guessedLetters;
let wordDisplay;
let hintUsed = false;

const scaffoldStages = [
  `
     -----
     |   |
         |
         |
         |
         |
    =========`,
  `
     -----
     |   |
     O   |
         |
         |
         |
    =========`,
  `
     -----
     |   |
     O   |
     |   |
         |
         |
    =========`,
  `
     -----
     |   |
     O   |
    /|   |
         |
         |
    =========`,
  `
     -----
     |   |
     O   |
    /|\\  |
         |
         |
    =========`,
  `
     -----
     |   |
     O   |
    /|\\  |
    /    |
         |
    =========`,
  `
     -----
     |   |
     O   |
    /|\\  |
    / \\  |
         |
    =========`,
];

function initializeGame() {
  const category = document.getElementById("categorySelect").value;
  let words;
  if (category === "programming") {
    words = programmingWords;
  } else if (category === "movies") {
    words = movieWords;
  } else if (category === "animals") {
    words = animalWords;
  }
  selectedWord = words[Math.floor(Math.random() * words.length)];
  lives = maxLives;
  guessedLetters = [];
  wordDisplay = Array(selectedWord.length).fill("_");
  hintUsed = false;
  document.getElementById("hintButton").disabled = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("wordDisplay").innerText = wordDisplay.join(" ");
  document.getElementById("livesDisplay").innerText = `Lives: ${lives}`;
  document.getElementById(
    "guessedLetters"
  ).innerText = `Guessed Letters: ${guessedLetters.join(", ")}`;
  document.getElementById("scaffoldDisplay").innerText =
    scaffoldStages[maxLives - lives];
  document.getElementById("hintDisplay").innerText = "";
}

function handleGuess() {
  const letterInput = document.getElementById("letterInput");
  const guess = letterInput.value.toLowerCase();
  letterInput.value = "";

  if (guess.length !== 1 || !/[a-z]/.test(guess)) {
    document.getElementById("message").innerText =
      "Please enter a valid letter.";
    return;
  }

  if (guessedLetters.includes(guess)) {
    document.getElementById("message").innerText =
      "You already guessed that letter.";
    return;
  }

  guessedLetters.push(guess);

  if (selectedWord.includes(guess)) {
    for (let i = 0; i < selectedWord.length; i++) {
      if (selectedWord[i] === guess) {
        wordDisplay[i] = guess;
      }
    }
  } else {
    lives--;
  }

  checkGameState();
  updateDisplay();
}

function handleHint() {
  if (!hintUsed) {
    const remainingLetters = selectedWord
      .split("")
      .filter((letter) => !guessedLetters.includes(letter));
    if (remainingLetters.length > 0) {
      const hintLetter =
        remainingLetters[Math.floor(Math.random() * remainingLetters.length)];
      document.getElementById("hintDisplay").innerText = `Hint: ${hintLetter}`;
      guessedLetters.push(hintLetter);
      for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === hintLetter) {
          wordDisplay[i] = hintLetter;
        }
      }
      hintUsed = true;
      updateDisplay();
    }
  } else {
    document.getElementById("hintDisplay").innerText =
      "No more hints available.";
  }
}

function checkGameState() {
  if (wordDisplay.join("") === selectedWord) {
    document.getElementById("message").innerText = "Congratulations! You won!";
    document.getElementById("guessButton").disabled = true;
    document.getElementById("letterInput").disabled = true;
    document.getElementById("hintButton").disabled = true;
  } else if (lives <= 0) {
    document.getElementById(
      "message"
    ).innerText = `Game over! The word was "${selectedWord}".`;
    document.getElementById("guessButton").disabled = true;
    document.getElementById("letterInput").disabled = true;
    document.getElementById("hintButton").disabled = true;
  } else {
    document.getElementById("message").innerText = "";
  }
}

document.getElementById("guessButton").addEventListener("click", handleGuess);
document
  .getElementById("letterInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleGuess();
    }
  });

document.getElementById("hintButton").addEventListener("click", handleHint);
document
  .getElementById("categorySelect")
  .addEventListener("change", initializeGame);

initializeGame();
