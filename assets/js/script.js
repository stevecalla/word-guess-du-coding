//section:query selector variables go here 👇
let playGameButton = document.getElementById('playGame');
let timerInfo = document.getElementById('timer-readout');
let inputCharacter = document.getElementById('input-character');
let guessStatus = document.getElementById('guess-status');
let timeInGame = document.getElementById('timer-readout');

//section:global variables go here 👇
let count = 10;
let win = [];
let countDownTime;

//section:event listeners go here 👇
playGameButton.addEventListener('click', playGame);
inputCharacter.addEventListener('input', getInput);

//section:functions and event handlers go here 👇
timeInGame.innerText = `Time in Game: ${count} second(s)`;

function playGame() {
  console.log('Ready to play');
  timeInGame.innerText = `Time in Game: ${count} second(s)`;
  gameTimer();
}

function gameTimer() {
  countDownTime = setInterval(() => {
      if (count > 0) {
        count--;
        timeInGame.innerText = `Time in Game: ${count} second(s)`;
        inputCharacter.removeAttribute('disabled', 'false');
      } else {
        clearInterval(countDownTime);
        console.log('Game over');
        guessStatus.innerText = "Game Over. Out of Time. You Lost!"
        inputCharacter.setAttribute('disabled', 'true');
        count = 10
        // timeInGame.innerText = `Time in Game: ${count} seconds`;
      }
    }, 1000);

}

function getInput() {
  console.log(inputCharacter.value);
  let guess = inputCharacter.value;
  checkInput(guess);
}

function checkInput(guess) {
  let word = 'guess';

  for (let i = 0; i < word.length; i++) {
    guess === '' ? console.log(null) : guess;

    if (guess === '') {
      guessStatus.innerText = null;
    } else if (word.includes(guess)) {
      guessStatus.innerText = "Good guess";
    } else {
      guessStatus.innerText = "No luck. Try again";
    }

    if (word.charAt(i) === guess) {
      document.querySelectorAll('li')[i].innerText = guess;
      win[i] = guess;
    }
    console.log(win);
    // inputCharacter.value = null;
  }

  determineWin(word, guess);
}

function determineWin(word, guess) {
  console.log(win)
  if (win.join('') === word) {
    console.log('you win', win.length, word.length)
    inputCharacter.setAttribute('disabled', 'true');
    inputCharacter.value = null;
    guessStatus.innerText = "You win with " + count + " second(s) to spare!!"
    clearInterval(countDownTime);
    // timeInGame.innerText = `Time in Game: ${count} seconds`;
    count = 10;
    return;
  } 

}
