
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

  const inputText = validCaracteres(item.value)

  if (inputText == null || inputText == undefined) {
    
  } else {
    div.className = inputText

    label.textContent = item.value
    div.append(label)
  
    input.type = "checkbox"
    input.name = "itens"
    input.id = inputText
    input.value = inputText
    label.append(input)
    
    a.href = "#"
    a.id = "excluir"
    a.setAttribute("onclick", `excluirProduto("${inputText}")`)
    div.append(a)
  
    img.src = "assets/icon/exclusao.svg"
    img.alt = " "
    a.append(img)
    document.querySelector(".container-lista").append(div)
    document.querySelector("#item").value = ""
    //console.log(div) 

    alert("flex", "Item Cadastrado com Sucesso!", "#55a19e", "#D1D5DB")
  }
})



function validCaracteres(value) {
  //Validação do Input Text
  const textSpace = value.replace(/ /gi, "") //Remove espaços do texto

  //const regex = /[0-9!@]/ 
  const regex = /[0-9!@#$%¨&*(){}[?/;:.,\]|'"´`=-]/ // valida sem tem numero e outros tipo de caracteres no texto
  const regeX = /\W/ // Validação se tem acentos

  if (regex.test(textSpace) || regeX.test(textSpace)) { // validador de string
    alert("flex", `Valor Invalido - "${item.value}"`, "#C93847", "#C93847")
    document.querySelector("#item").value = ""
   } else if (textSpace === "") { // Outra validação para verificar se o texto está em branco
     alert("flex", "Favor digitar o campo!", "#C93847", "#C93847")
     document.querySelector("#item").value = ""
   } else {
    return textSpace
   }
}



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
    alert("flex", "Item foi removido da lista", "#55a19e")

  } else {
    alert("flex", "Favor marcar o Item para ser removido!", "#C93847", "#C93847")
  }
}



function alert(display, text, background, outline) {
  document.querySelector(".alert").style.display = display
  document.querySelector("span").textContent = text
  document.querySelector(".alert").style.backgroundColor = background
  document.querySelector("#item").style.outlineColor = outline
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





