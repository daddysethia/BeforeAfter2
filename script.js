// Green tick emoji
const greenTick = String.fromCharCode(0x2705);

// Red cross emoji
const redCross = String.fromCharCode(0x274c);

// Message after pressing Check
const message = document.getElementById('message');

// Wait for the page to load before running the code
window.addEventListener("DOMContentLoaded", () => {

  // Generate a random number from 1 to 100 for the center box
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById("number").innerHTML = randomNumber;

  // Check if the user's guesses are correct
  // Check if the user's guesses are correct
function checkGuess() {
  const guess1 = Number(document.getElementById("guess1").value);
  const guess2 = Number(document.getElementById("guess2").value);

  if (guess1 === randomNumber - 1 && guess2 === randomNumber + 1) {
    message.innerText = "Congratulations, you guessed correctly! \u2705";
    // Generate a new random number for the center box
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById("number").innerHTML = randomNumber;
    // Clear out the guess input fields
    document.getElementById("guess1").value = "";
    document.getElementById("guess2").value = "";
  } else {
    message.innerText = "Oops! \u274c";
    // Change the "Check" button color to red
    //document.getElementById("check-btn").style.backgroundColor = "red";
    // Clear out the guess input fields
    document.getElementById("guess1").value = "";
    document.getElementById("guess2").value = "";
  }
}

  // Attach the checkGuess function to the "Check" button
  document.getElementById("check-btn").addEventListener("click", checkGuess);

});
