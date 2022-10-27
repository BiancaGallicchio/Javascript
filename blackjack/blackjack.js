/* 
    Como funciona o jogo;
    O objetivo do jogo é ficar com uma mão que some exatamente 21. Se vc não chegou em 21,
    vc ao menos quer chegar o mais próximo possível de 21. Se vc passou de 21, vc perdeu o jogo automaticamente
*/
let hasBlackjack = false;
let isAlive = false;

let cards = []; // array de cartas
let cardEl = document.getElementById("card-el");
let sum = 0;
let sumEl = document.querySelector("#sum-el"); // no querySelector vc precisa especiicar com a # se for um id

let message = ""
let messageEL = document.getElementById("message-el");

function getRandomCard(){
    let num = Math.floor(Math.random()*13) + 1
    if(num == 1){
        return 11
    }
    else if(num == 11 || num == 12 || num == 13){
        return 10
    }
    else{
        return num
    }
}

function startGame(){
    if(isAlive === false || hasBlackjack === true){ // limpar as cartas
        cards = [];
        cardEl.textContent = "Cards: ";
    }
    hasBlackjack = false; // quando o jogo começa, essa variavel volta a ser false
    isAlive = true;
    let card = getRandomCard();
    cards.push(card);
    sum = card;
    renderGame();

}

function renderGame(){
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        // pode continuar a jogar
        message = "Draw new card?";
    }
    else if(sum === 21){
        message = "You've got a Blackjack!";
        hasBlackjack = true;
    }
    else{  // maior que 21
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEL.textContent = message
    //console.log(message)
}

function newCard(){ // só vou poder pergar uma carta nova se ainda estou no jogo e se não venci ainda
    if(isAlive === true && hasBlackjack === false){
        console.log("Drawing a new card from the deck...")
        let newOne = getRandomCard() // 2 - 11
        sum += newOne
        cards.push(newOne);
        renderGame();
    }
}
