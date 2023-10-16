const cardArray = [
    {
        nome: 'batata frita',
        img: 'img/fries.png',
    },
    {
        nome: 'cachorro quente',
        img: 'img/hotdog.png',
    },
    {
        nome: 'picolé',
        img: 'img/ice-cream.png',
    },
    {
        nome: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        nome: 'pizza',
        img: 'img/pizza.png',
    },
    {
        nome: 'hamburguer',
        img: 'img/cheeseburger.png',
    },
    {
        nome: 'batata frita',
        img: 'img/fries.png',
    },
    {
        nome: 'cachorro quente',
        img: 'img/hotdog.png',
    },
    {
        nome: 'picolé',
        img: 'img/ice-cream.png',
    },
    {
        nome: 'milkshake',
        img: 'img/milkshake.png',
    },
    {
        nome: 'pizza',
        img: 'img/pizza.png',
    },
    {
        nome: 'hamburguer',
        img: 'img/cheeseburger.png',
    },
]

cardArray.sort(() => 0.5 - Math.random()) // jeito de misturar um array aleatoriamente

const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

let tempoAtual = 0;
let temporizador;

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img') // criar um elemento de imagem para formar o jogo
        card.setAttribute('src', 'img/bollard.png') // basicamente, ao inves de criar no html to fazendo tudo por JS, criando tags
        card.setAttribute('data-id', i) // cada carta vai ter um id único
        card.classList.add('card-image'); // Adicione a classe à imagem
        card.addEventListener('click', flipCard)
        //agora, queremos colocar as cartas no grid, entre as tags div
        grid.append(card)
    }
    iniciarTemporizador();
}

createBoard() // NÃO APAGAR

function iniciarTemporizador() {
    temporizador = setInterval(function () {
        tempoAtual++;
        document.getElementById('tempo').textContent = tempoAtual;
    }, 1000);
}

function pararTemporizador() {
    clearInterval(temporizador);
}

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    const opcao1 = cardsChosenIds[0]
    const opcao2 = cardsChosenIds[1]

    if(opcao1 == opcao2){ // pessoa clicou na msm imagem 2 vezes
        cards[opcao1].setAttribute('src', 'img/bollard.png')
        cards[opcao2].setAttribute('src', 'img/bollard.png')
    }
    if(cardsChosen[0] == cardsChosen[1]){ // pessoa achou o par
        cards[opcao1].setAttribute('src', 'img/white.png') // o primeiro vai ficar branco
        cards[opcao2].setAttribute('src', 'img/white.png') // o segundo vai ficar branco

        cards[opcao1].removeEventListener('click', flipCard) // remover a possibilidade de virar a carta
        cards[opcao2].removeEventListener('click', flipCard)

        cards[opcao1].style.cursor = 'default'; // voltar o cursor ao normal
        cards[opcao2].style.cursor = 'default';
        cardsWon.push(cardsChosen)
    } else{ // pessoa errou 
        cards[opcao1].setAttribute('src', 'img/bollard.png')
        cards[opcao2].setAttribute('src', 'img/bollard.png')
    }
    result.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        pararTemporizador();
        result.textContent = 'Parabéns! Você venceu em ' + tempoAtual + ' segundos!';   
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].nome)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    
    if(cardsChosen.length === 2){ // se duas cartas forem escolhidas
        setTimeout(checkMatch, 500)
    }
}