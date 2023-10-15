const compChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button') // vamos selecionar todas as tags button
// se eu quiser criar mais botões, o ideal é usar getElementByClassName pra não afetar os botoes nao relacionados
let userChoice
let compChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
// para cada possibleChoice, eu vou pegar um possibleChoice e esperar um click em algum dos botões
// aí passo isso por uma outra função que tem o objetivo de renderizar isso na
// seção de escolha. Explicação:
// userChoice recebe e.target.id, que é o indicador de qual botao eu apertei, já que cada um deles tem o seu ID e eu estou iterando por eles
// em seguida, também queremos que o computador faça uma escolha. então chamamos a função

function generateComputerChoice(){
    const num = Math.floor(Math.random() * possibleChoices.length) // 3 possibilidades
    console.log(num)
    if (num === 0){
        compChoice = 'pedra'
    } else if(num === 1){
        compChoice = 'papel'
    } else if(num === 2){
        compChoice = 'tesoura'
    }
    compChoiceDisplay.innerHTML = compChoice
}

function getResult(){
    if(compChoice === userChoice){
        result = 'empate!'
        resultDisplay.style.color = 'black'
    } else if(compChoice == 'pedra' && userChoice == 'papel'){
        result = 'você VENCEU! :D'
        resultDisplay.style.color = '#76BA99'
    }else if(compChoice == 'pedra' && userChoice == 'tesoura'){
        result = 'você PERDEU! :C'
        resultDisplay.style.color = '#ff6961'
    }else if(compChoice == 'papel' && userChoice == 'pedra'){
        result = 'você PERDEU! :C'
        resultDisplay.style.color = '#ff6961'
    }else if(compChoice == 'papel' && userChoice == 'tesoura'){
        result = 'você VENCEU! :D'
        resultDisplay.style.color = '#76BA99'
    }else if(compChoice == 'tesoura' && userChoice == 'papel'){
        result = 'você PERDEU! :C'
        resultDisplay.style.color = '#ff6961'
    }else if(compChoice == 'tesoura' && userChoice == 'pedra'){
        result = 'você VENCEU! :D'
        resultDisplay.style.color = '#76BA99'
    }
    resultDisplay.innerHTML = result
}