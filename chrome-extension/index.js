const inputBtn = document.getElementById("input-btn")
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")

inputEl.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("input-btn").click();
      }
}); // se o usuário apertar enter, vai salvar a entrada

inputBtn.addEventListener("click", function(){ // tudo o q eu escrever aqui será feito pela função quando eu clicar no botão
    myLeads.push(inputEl.value)
    inputEl.value = "" // limpar a caixa do input quando o usuário clica enter/no botão
    renderLeads()
})

function renderLeads(){
   let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += "<li>" + myLeads[i] +"</li>"; 
        //const li = document.createElement("li") // outro jeito de fazer o q tá ali
        //li.textContent = myLeads[i]
        //ulEl.append(li)
    }
    ulEl.innerHTML = listItems 
}