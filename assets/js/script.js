//section:query selector variables go here 👇
let playGameButton = document.getElementById('playGame');
let timerInfo = document.getElementById('timer-readout');
let inputCharacter = document.getElementById('input-character');
let guessStatus = document.getElementById('guess-status');
let timeInGame = document.getElementById('timer-readout');
let stats = document.getElementById('stats');
let wordStructure = document.getElementById('word');

//section:global variables go here 👇
let count = 5;
let wordGuess = [];
let countDownTime;
let winCount = 0;
let lossCount = 0;
let words = ['event', 'javascript', 'html', 'coding'];
let word;

//section:event listeners go here 👇
playGameButton.addEventListener('click', playGame);
// inputCharacter.addEventListener('input', getInput);
inputCharacter.addEventListener('keydown', getInput);

window.onload = function() {
  // console.log(localStorage.getItem('winCount'))
  winCount = localStorage.getItem('winCount');
  // console.log(winCount);
  lossCount = localStorage.getItem('lossCount');
  // console.log(lossCount);
  stats.innerText = `Wins = ${winCount}, Losses = ${lossCount}`;

  let randomNum = Math.floor(Math.random() * words.length);
  word = words[randomNum];


  // inputCharacter.focus();
  wordStructure.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    wordStructure.innerHTML += `
      <li></li>
    `
  }

  console.log(word);
}

//section:functions and event handlers go here 👇
timeInGame.innerText = `Time in Game: ${count} second(s)`;

function playGame() {
  if (count === 5) {
    inputCharacter.removeAttribute('disabled', 'true');
    inputCharacter.focus();
    console.log('Ready to play');
    timeInGame.innerText = `Time in Game: ${count} second(s)`;
    
    let randomNum = Math.floor(Math.random() * words.length);
    word = words[randomNum];
  
    wordStructure.innerHTML = "";
  
    for (let i = 0; i < word.length; i++) {
      wordStructure.innerHTML += `
        <li></li>
      `
    }
    clearInterval(countDownTime);
    console.log(word);
    
    gameTimer();
  }
}

function gameTimer() {
  countDownTime = setInterval(() => {
      if (count > 0) {
        count--;
        timeInGame.innerText = `Time in Game: ${count} second(s)`;
        inputCharacter.removeAttribute('disabled', 'false');
      } else {
        clearInterval(countDownTime);
        // console.log('Game over');
        guessStatus.innerText = "Game Over. Out of Time. You Lost!"
        inputCharacter.setAttribute('disabled', 'true');
        lossCount++;
        stats.innerText = `Wins = ${winCount}, Losses = ${lossCount}`;
        storeStats();
        count = 5;
        // timeInGame.innerText = `Time in Game: ${count} seconds`;
      }
    }, 1000);
}

function getInput(event) {
  // console.log(inputCharacter.value);
  // let guess = inputCharacter.value;
  let guess = event.key.toLowerCase();
  let guessCode = event.keyCode;
  checkInput(guess, guessCode);
  // console.log(event.key, event.code, event.keyCode)
}

function checkInput(guess, guessCode) {
  // let word = words[1];

  for (let i = 0; i < word.length; i++) {
    // guess === '' ? console.log(null) : guess;

    if (guess === '' || (guessCode >=65 || guessCode <= 90)) {
      guessStatus.innerText = null;
    } else if (word.includes(guess)) {
      guessStatus.innerText = "Good guess";
    } else {
      guessStatus.innerText = "No luck. Try again";
    }

    if (word.charAt(i) === guess) {
      document.querySelectorAll('li')[i].innerText = guess;
      wordGuess[i] = guess;
    }
    // console.log(wordGuess);
    // inputCharacter.value = null;
  }

  determineWin(word, guess);
}

function determineWin(word, guess) {
  // console.log(wordGuess)
  if (wordGuess.join('') === word) {
    // console.log('you win', wordGuess.length, word.length)
    inputCharacter.setAttribute('disabled', 'true');
    inputCharacter.value = null;
    guessStatus.innerText = "You win with " + count + " second(s) to spare!!"
    clearInterval(countDownTime);
    // timeInGame.innerText = `Time in Game: ${count} seconds`;
    winCount++;
    stats.innerText = `Wins = ${winCount}, Losses = ${lossCount}`;
    storeStats();
    count = 5;
    return;
  } 
}

function storeStats() {
  localStorage.setItem('winCount', winCount);
  localStorage.setItem('lossCount', lossCount);
  // const cat = localStorage.getItem('myCat');
}
