
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


  div.className = item.value

  label.textContent = item.value
  div.append(label)

  input.type = "checkbox"
  input.name = "itens"
  input.id = item.value
  input.value = item.value
  label.append(input)
  
  a.href = "#"
  a.id = "excluir"
  a.setAttribute("onclick", `excluirProduto("${item.value}")`)
  div.append(a)

  img.src = "assets/icon/exclusao.svg"
  img.alt = " "
  a.append(img)


  document.querySelector(".container-lista").append(div)

  console.log(div)  
})



// Removendo o item da lista 
function excluirProduto(id) {
  const checkboxChecked = document.querySelector(`#${id}`).checked
  const div = document.createElement("div")

  if (checkboxChecked) {
    console.log("checked!")
    console.log(id)
    document.querySelector(`.${id}`).remove(div)
  } else {
    console.log("no checked!")
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





