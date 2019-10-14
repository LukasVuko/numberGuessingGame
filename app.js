//Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;

const game = document.querySelector('#game'),
  minNum = document.querySelector('#min-num'),
  maxNum = document.querySelector('#max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('#message');

// Assign UI Elements
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener

game.addEventListener('mousedown', function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  console.log(guess);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You won!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over. You lost! The correct number was ${winningNum}.`
      );
    } else {
      setMessage(
        `${guess} was incorrect. You have ${guessesLeft} guess left.`,
        'red'
      );
      guessInput.value = '';
    }
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  setMessage(msg, color);
  guessInput.disabled = true;
  guessInput.style.borderColor = color;

  guessBtn.value = 'Play again';
  guessBtn.className += 'play-again';
}

function getRandomNumber(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(num);
  return num;
}
