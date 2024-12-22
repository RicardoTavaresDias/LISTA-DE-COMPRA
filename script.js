const form = document.querySelector("form")
const item = document.getElementById("item")
const checkbox = document.querySelectorAll('input[type="checkbox"]')




form.addEventListener ("submit", (event) => {
  event.preventDefault()

  // Adicionando o Item na lista
  const div = document.createElement("div")
  const label = document.createElement("label")
  const input = document.createElement("input")
  const img = document.createElement("img")
  const a = document.createElement("a")
  const span = document.createElement("a")


  div.className = item.value

  label.id = "itens"
  label.textContent = item.value
  div.appendChild(label)

  input.type = "checkbox"
  input.name = "itens"
  input.id = "itens"
  label.appendChild(input)
  
  a.href = "#"
  div.appendChild(a)

  img.src = "assets/icon/exclusao.svg"
  img.alt = ""
  a.appendChild(img)

document.querySelector(".container-lista").append(div)

  console.log(div)
 

  // Removendo o item na lista
  checkbox.forEach((element) => {

    if (element.checked) {
      // console.log("checked!")
      // console.log(element.value)
    
      document.querySelector(".cafe").remove(div)

  

    
    }else {
      console.log("no checked!")
    }

  })

})

