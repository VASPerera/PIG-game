'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.game');
const btnRoll = document.querySelector('.roll-dice');
const btnHold = document.querySelector('.hold');


 diceEl.classList.remove('hidden');
 score0.textContent = 'hgs';

//rolling dice functionality
btnRoll.addEventListener('click', function(){

    // 1.genarating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;


    //2. Display Dice
    diceEl.classList.remove('.hidden');
    diceEl.src = 'images/dice${dice}.png';


    //3. check for rolled 1: if switch to next player

});



