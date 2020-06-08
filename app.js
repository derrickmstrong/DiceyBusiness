const generateBtn = document.querySelector('#generate-btn');
const rollBtn = document.querySelector('#roll-btn');
const sumBtn = document.querySelector('#sum-btn');
const container = document.querySelector('.container');
const board = document.querySelector('#board');

let value = Math.floor(Math.random() * 6 + 1);
let counter = 1;

class Die {
  constructor(value) {
    this.div = document.createElement('div');
    this.value = document.createTextNode(value);
    this.div.className = 'dice';
    this.div.id = counter;
    board.appendChild(this.div);
    this.roll();
    this.rollAll();
  }

  roll() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    switch (randomNum) {
      case 1:
        this.div.innerText = '🎲';
        break;
      case 2:
        this.div.innerText = `2`;
        break;
      case 3:
        this.div.innerText = `3`;
        break;
      case 4:
        this.div.innerText = `4`;
        break;
      case 5:
        this.div.innerText = `5`;
        break;
      case 6:
        this.div.innerText = `6`;
        break;
      default:
        alert('No Dice');
    }
  }

  rollAll() {
    rollBtn.addEventListener('click', () => this.roll());
  }
}

generateBtn.addEventListener('click', function () {
  new Die(value);
  value = Math.floor(Math.random() * 6 + 1);
  counter++;
});
