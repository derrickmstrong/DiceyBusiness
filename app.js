const generateBtn = document.querySelector('#generate-btn');
const rollBtn = document.querySelector('#roll-btn');
const sumBtn = document.querySelector('#sum-btn');
const container = document.querySelector('.container');
const board = document.querySelector('#board');
let value = Math.floor(Math.random() * 6 + 1);
let counter = 1;

class Die {
  constructor(value) {
    this.makeDie();
    this.rollDie();
    this.rollAll();
  }

  makeDie() {
    this.div = document.createElement('div');
    this.value = document.createTextNode(value);
    this.div.className = 'dice';
    this.div.id = 'dice' + counter;
    board.appendChild(this.div);
    counter++;
  }

  rollDie() {
    let randomNum = Math.floor(Math.random() * 6 + 1);
    value = randomNum;

    switch (value) {
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
        alert('No Die');
    }
  }

  rollAll() {
    rollBtn.addEventListener('click', () => this.rollDie());
  }
}

generateBtn.addEventListener('click', () => {
  new Die(value);
  /* Implement later in Dice Game
    new Die(value);
    const dice1 = document.querySelector('#dice1');
    const dice2 = document.querySelector('#dice2');
    console.log(dice1.innerHTML);
    console.log(dice2.innerHTML);
    console.log(Number(dice1.innerHTML) + Number(dice2.innerHTML));
*/
});
