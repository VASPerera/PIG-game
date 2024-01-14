'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currentScore0El = document.getElementById('currentscore--0');
const currentScore1El = document.getElementById('currentscore--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.game');
const btnRoll = document.querySelector('.roll-dice');
const btnHold = document.querySelector('.hold');

const score = [0,0];
let currentScore = 0;
let activePlayer = 0;


 diceEl.classList.add('hidden');


//rolling dice functionality
btnRoll.addEventListener('click', function(){

    
    // 1.genarating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);


    //2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = 'images/dice-' + dice + '.png';
    


    //3. check for rolled 1: if switch to next player
    if(dice!==1){
        currentScore = currentScore + dice;
        document.getElementById('currentscore--'+activePlayer).textContent = currentScore;
    }

    else{
        document.getElementById('currentscore--'+activePlayer).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('active--player');
        player1El.classList.toggle('active--player');
        
    }

});

btnHold.addEventListener('click', function(){
    // 1. add current score to active player score

    score[activePlayer] += currentScore;
    document.getElementById('score--'+activePlayer).textContent = score[activePlayer];


    // 2. check player score's is >=100
    // finish the game


    // 3.switch to the next player
    player0El.classList.toggle('active--player');
    player1El.classList.toggle('active--player');
    document.getElementById('currentscore--'+activePlayer).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
})



