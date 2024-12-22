let form = document.querySelector("form")
let item = document.getElementById("item")
let checkbox = document.querySelector('input[type="checkbox"]')


form.addEventListener ("submit", (event) => {
  event.preventDefault()

  // Adicionando o Item na lista
  let div = document.createElement("div")
  let label = document.createElement("label")
  let input = document.createElement("input")
  let img = document.createElement("img")
  let a = document.createElement("a")


  div.className = item.value

  // label.name = "itens"
  // label.id = "itens"
  label.textContent = item.value
  div.append(label)

  input.type = "checkbox"
  input.name = "itens"
  input.id = item.value
  input.value = item.value
  label.append(input)
  
  a.href = "#"
  a.id = "excluir"
  //a.style.cursor = "pointer"
  a.setAttribute("onclick", `excluirProduto("${item.value}")`)
  div.append(a)

  img.src = "assets/icon/exclusao.svg"
  img.alt = " "
  a.append(img)

  

document.querySelector(".container-lista").append(div)

  console.log(div)  
})














function excluirProduto(id) {
  const checkboxChecked = document.querySelector(`#${id}`).checked
  let div = document.createElement("div")

  if (checkboxChecked) {
    console.log("checked!")
    console.log(id)
    document.querySelector(`.${id}`).remove(div)
  } else {
    console.log("no checked!")
  }
}











// // Removendo o item na lista
// removeItem.forEach((itemRemove) => {

// itemRemove.addEventListener("click", (event) => {
  
//   checkbox.forEach((element) => {

//     if (element.checked) {
//       // console.log("checked!")
//       console.log(element.value)
  
//       let div = document.createElement("div")
//       //document.querySelector(`.${element.value}`).remove(div)
      
   
//     }else {
//       console.log("no checked!")
//     }
  
//   })
//   })

// })





