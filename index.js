let countEl = document.getElementById("count-el") // referencia a qual parte do html eu estou falando
let count = 0;
let saveEl = document.getElementById("save-el") 
console.log(countEl);

function incrementar(){
    count++; // incremento o contador
    countEl.innerText = count; // quero q a tela mostre o novo numero do contador
}

function salvar(){
    let salvo = count + " - ";
    saveEl.textContent  += salvo;
    console.log(count); // só pra checar como backup
}

function reset(){
    count = 0;
    countEl.innerText = count;
}

// let welcomeEl = document.getElementById("welcome-el")
// let nome = "Bianca"
// let ola = "Saudações"
// welcomeEl.innerText = ola + ", " + nome

