//section:query selector variables go here 👇
let playGameButton = document.getElementById('playGame');
let timerInfo = document.getElementById('timer-readout');
let inputCharacter = document.getElementById('input-character');

//section:global variables go here 👇

//section:event listeners go here 👇
playGameButton.addEventListener('click', playGame);
inputCharacter.addEventListener('input', getInput);

//section:functions and event handlers go here 👇
function playGame() {
  console.log('Ready to play');
  gameTimer();
}

function gameTimer() {
  let count = 10;
  let timeInGame = setInterval(() => {
      if (count > 0) {
        console.log(count);
        count--;
        timerInfo.innerText = "Time Remaining = " + count;
      } else {
        console.log(count)
        clearInterval(timeInGame);
        console.log('Game over');
      }
    }, 1000);
}

function getInput() {
  console.log(inputCharacter.value);
  let guess = inputCharacter.value;
  //check input
  checkInput(guess);
}

function checkInput(guess) {
  let word = 'guess';
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === guess) {
      console.log('yes');
      document.querySelectorAll('li')[i].innerText = guess;
    } else {
      console.log('no');
    }
    // inputCharacter.value = null;
  }
}