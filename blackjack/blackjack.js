/* 
    Como funciona o jogo;
    O objetivo do jogo é ficar com uma mão que some exatamente 21. Se vc não chegou em 21,
    vc ao menos quer chegar o mais próximo possível de 21. Se vc passou de 21, vc perdeu o jogo automaticamente

*/
let hasBlackjack = false;
let isAlive = true;

let firstCard = 11;
let secondCard = 10;
let cardEl = document.getElementById("card-el");
cardEl.textContent = "Cards: " + firstCard + " " + secondCard

let sum = firstCard + secondCard;
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el"); // no querySelector vc precisa especiicar com a # se for um id
sumEl.textContent = "Sum: " + sum;

let message = document.getElementById("message-el");

function startGame(){
    if(sum <= 20){
        // pode continuar a jogar
        message.textContent = "Draw new card?";
    }
    else if(sum === 21){
        message.textContent = "You've got a Blackjack!";
        hasBlackjack = true;
    }
    else{  // maior que 21
        message.textContent = "You're out of the game!";
        isAlive = false;
    }

    //console.log(message)
}

