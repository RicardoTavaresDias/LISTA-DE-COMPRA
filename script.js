
//Variaveis
const form = document.querySelector("form")
const item = document.getElementById("item")
const checkbox = document.querySelector('input[type="checkbox"]')



// Adicionando o Item na lista
form.addEventListener ("submit", (event) => {
  event.preventDefault()

  const div = document.createElement("div")
  const label = document.createElement("label")
  const input = document.createElement("input")
  const img = document.createElement("img")
  const a = document.createElement("a")

  //Validação do Input Text
  const textSpace = item.value.replace(/ /gi, "") //Remove espaços do texto
  //const regex = /[0-9!@]/ 
  const regex = /[0-9!@#$%¨&*(){}[?/;:.,\]|'"´`=-_]/ // valida sem tem numero e outros tipo de caracteres no texto

  if (regex.test(textSpace)) { // validador de string

    document.querySelector(".alert").style.display = "flex"
    document.querySelector("span").textContent = `Valor Invalido - "${item.value}"`
    document.querySelector(".alert").style.backgroundColor = "#C93847"
    document.querySelector("#item").style.outlineColor = "#C93847"

    document.querySelector("#item").value = ""

  } else if (textSpace === "") { // Outra validação para verificar se o texto está em branco

    document.querySelector(".alert").style.display = "flex"
    document.querySelector("span").textContent = "Favor digitar o campo!"
    document.querySelector(".alert").style.backgroundColor = "#C93847"
    document.querySelector("#item").style.outlineColor = "#C93847"

    document.querySelector("#item").value = ""

  } else {
    
    div.className = textSpace

    label.textContent = item.value
    div.append(label)
  
    input.type = "checkbox"
    input.name = "itens"
    input.id = textSpace
    input.value = textSpace
    label.append(input)
    
    a.href = "#"
    a.id = "excluir"
    a.setAttribute("onclick", `excluirProduto("${textSpace}")`)
    div.append(a)
  
    img.src = "assets/icon/exclusao.svg"
    img.alt = " "
    a.append(img)
    document.querySelector(".container-lista").append(div)
    document.querySelector("#item").value = ""
    //console.log(div) 

    document.querySelector(".alert").style.display = "flex"
    document.querySelector(".alert").style.backgroundColor = "#55a19e"
    document.querySelector("span").textContent = "Item Cadastrado com Sucesso!"
    document.querySelector("#item").style.outlineColor = "#D1D5DB"

  } 
})



//Fechar o Alert
document.querySelector("#alert").addEventListener("click", (event) => {
  const close = document.querySelector(".alert")
  close.style.display = "none"
})



// Removendo o item da lista 
function excluirProduto(id) {
  const checkboxChecked = document.querySelector(`#${id}`).checked
  const div = document.createElement("div") 

  if (checkboxChecked) {
    // console.log("checked!")
    // console.log(id)
    document.querySelector(`.${id}`).remove(div)
    document.querySelector(".alert").style.display = "flex"
    document.querySelector(".alert").style.backgroundColor = "#55a19e"
    document.querySelector("span").textContent = "Item foi removido da lista"  
  } else {
    document.querySelector(".alert").style.display = "flex"
    document.querySelector("span").textContent = "Favor marcar o Item para ser removido!"
    document.querySelector(".alert").style.backgroundColor = "#C93847"
    document.querySelector(`.${id}`).style.outlineColor = "#C93847"
  }
}









//############## Aqui é exemplo de pegar os selecionados checked e remover da lista ###########################


// const checkbox = document.querySelectorAll('input[type="checkbox"]') 
// const removeItem = document.querySelectorAll(".excluir")
  
//   // Removendo o item da lista 
//   removeItem.forEach((itemRemove) => { 
//     itemRemove.addEventListener("click", (event) => { 
//       checkbox.forEach((element) => { 
//       if (element.checked) { 
  
//           // console.log("checked!") 
//           console.log(element.value) 
          
//           const div = document.createElement("div") 
//           //document.querySelector( .${element.value}).remove(div) 
          
//           }else { 
//           console.log("nenhum verificado!") 
//           } 
//       }) 
//     }) 
//   })





