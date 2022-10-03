console.log('App started...');

const screen = document.getElementById('js-screen');

const buttons = document.querySelectorAll('.btn');

const actions = ['%', '/', 'X', '-', '+'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];

let firstNum = '';
let secondNum = '';
let symbol = null;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    screen.innerText = '';

    for (let i = 0; i < numbers.length; i++) {
      if (btn.textContent == numbers[i]) {
        if (symbol === null) {
          firstNum += btn.textContent;
          screen.innerText = `${firstNum}`;
          console.log(firstNum, secondNum, symbol);
        } else {
          secondNum += btn.textContent;
          screen.innerText = `${secondNum}`;
          console.log(firstNum, secondNum, symbol);
        }
      }
    }

    for (let i = 0; i < actions.length; i++) {
      if (btn.textContent == actions[i]) {
        symbol = actions[i];
        screen.innerText = symbol;
        console.log(firstNum, secondNum, symbol);
      }
    }

    if (btn.textContent === '=') {
      screen.innerText = `${equal(symbol)}`;
      firstNum = `${equal(symbol)}`;
      secondNum = '';
      symbol = '';
      console.log(firstNum, secondNum, symbol);
    }

    if (btn.textContent === 'AC') {
      firstNum = '';
      (secondNum = ''), (symbol = null);
      screen.innerText = '0';
    }

    if (btn.textContent === '+/-') {
      if (secondNum === '') {
        firstNum *= -1;
        screen.innerText = `${firstNum}`;
      } else {
        secondNum *= -1;
        screen.innerText = `${secondNum}`;
      }
    }
  });
});

function equal() {
  switch (symbol) {
    case '+':
      return isDot(+firstNum + +secondNum);
    case '-':
      return isDot(+firstNum - +secondNum);
    case 'X':
      return isDot(+firstNum * +secondNum);
    case '/':
      return isDot(+firstNum / +secondNum);
    case '%':
      return isDot((+firstNum * +secondNum) / 100);
    default:
      return NaN;
  }
}

function isDot(item) {
  if (Number(item) === item && item % 1 !== 0) {
    return item.toFixed(3);
  }
  return item;
}
