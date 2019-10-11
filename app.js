//Game Values
let min = 1,
  max = 10,
  winningNum = 2,
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

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    if (guess === winningNum) {
      guessInput.disabled = true;
      guessInput.style.borderColor = 'green';
      setMessage(`${winningNum} is correct! You won!`, 'green');
    } else {
      guessesLeft -= 1;
      if (guessesLeft === 0) {
        setMessage(
          `Game over. You lost. The correct number was ${winningNum}.`,
          'red'
        );
        guessBtn.value = 'Reset';
        guessInput.disabled = true;
      } else {
        setMessage(
          `${guess} was incorrect. You have ${guessesLeft} guess left.`,
          'red'
        );
        guessInput.value = '';
      }
    }
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
