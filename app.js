let randomNumber = Math.ceil(Math.random() * 100) + 1;
let guesses = [];

window.onload = function () {
  document.getElementById("submit").addEventListener("click", playGame);
  document.getElementById("restart").addEventListener("click", restartGame);
};

function playGame() {
  const input = document.getElementById("num").value;
  const alertMsg = document.getElementById("status");
  const displayGuesses = document.getElementById("history");
  if (input === "") {
    alertMsg.innerHTML = "Please enter a number.";
    alertMsg.classList.add("error");
    return; // Stop execution if input is empty
  }

  Alert(input, randomNumber, alertMsg);
  Terms(input, alertMsg);
  gameHistory(input, displayGuesses);
  document.getElementById("num").value = "";
}

function restartGame() {
  randomNumber = Math.ceil(Math.random() * 100) + 1; // Generate a new random number
  guesses = []; // Reset the guesses array

  const alertMsg = document.getElementById("status");
  const displayGuesses = document.getElementById("history");

  alertMsg.innerHTML = ""; // Clear the status message
  displayGuesses.innerHTML = ""; // Clear the guess history
  document.getElementById("num").value = ""; // Empty the input field
}

function Terms(input, alertMsg) {
  let texthigh = "guess is too high";
  let textlow = "guess is too low";
  let textcorrect = "guess is correct";
  if (input > randomNumber) {
    alertMsg.innerHTML = texthigh;
  } else if (input < randomNumber) {
    alertMsg.innerHTML = textlow;
  } else {
    alertMsg.innerHTML = textcorrect;
  }
}

function Alert(input, randomNumber, alertMsg) {
  if (input > randomNumber) {
    alertMsg.classList.add("error");
    alertMsg.classList.remove("warning");
    alertMsg.classList.remove("success");
  } else if (input < randomNumber) {
    alertMsg.classList.add("warning");
    alertMsg.classList.remove("error");
    alertMsg.classList.remove("success");
  } else {
    alertMsg.classList.remove("error");
    alertMsg.classList.remove("warning");
    alertMsg.classList.add("success");
  }
}

function gameHistory(input, displayGuesses) {
  guesses.unshift(input);
  console.log(guesses)
  displayGuesses.innerHTML = ""; // Clear previous history

  for (let i = 0; i < guesses.length; i++) {
    displayGuesses.classList.add("history");
    displayGuesses.innerHTML += `
    <li>You guessed ${guesses[i]}</li>
    `;
  }
}
