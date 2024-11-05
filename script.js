let attempts = 0;
const correctNumber = "171023"; // Replace with your special number

function checkGuess() {
  const userGuess = document.getElementById("guess-input").value;
  const message = document.getElementById("message");

  if (userGuess === correctNumber) {
    window.location.href = "https://adored-connection-475674.framer.app/"; // Replace with the path to the new page
  } else {
    attempts++;
    if (attempts >= 3) {
      message.textContent = "Hint: the day I first messaged you";
    } else {
      message.textContent = `Incorrect! Attempt ${attempts} of 3.`;
    }
  }
}
