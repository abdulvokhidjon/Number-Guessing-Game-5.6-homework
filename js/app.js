let randomNumber;
let attempts = 0;
let record = Infinity;

function startGame() {
  randomNumber = Math.floor(Math.random() * 30) + 1;
  attempts = 0;
  document.getElementById("attempts").innerText = attempts;
  document.getElementById("number-container").innerHTML =
    '<span class="bg-darkblue p-2 rounded-full shadow-md">?</span>';
  document.getElementById("guess-input").value = "";
  document.getElementById("start-game").innerText = "Game in progress...";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guess-input").value);
  attempts++;
  document.getElementById("attempts").innerText = attempts;

  if (guess === randomNumber) {
    document.getElementById("number-container").innerHTML =
      '<span class="bg-white p-2 rounded-full shadow-md text-green-500 font-bold">You win!</span>';
    document.getElementById("win-sound").play();
    if (attempts < record) {
      record = attempts;
      document.getElementById("record").innerText = record;
    }
    setTimeout(() => {
      document.getElementById("start-game").innerText = "Start game :)";
      startGame();
    }, 2000);
  } else if (guess < randomNumber) {
    document.getElementById("number-container").innerHTML =
      '<span class="bg-white p-2 rounded-full shadow-md text-red-500 font-bold">Too low</span>';
  } else {
    document.getElementById("number-container").innerHTML =
      '<span class="bg-white p-2 rounded-full shadow-md text-red-500 font-bold">Too high</span>';
  }

  if (attempts >= 5 && guess !== randomNumber) {
    document.getElementById("number-container").innerHTML =
      '<span class="bg-darkblue p-2 rounded-full shadow-md text-red-500 font-bold">You lost</span>';
    document.getElementById("lose-sound").play();
    setTimeout(() => {
      document.getElementById("start-game").innerText = "Start game :)";
      startGame();
    }, 2000);
  }
}
