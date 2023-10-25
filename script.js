// task 1
// let input=document.getElementById('ad')
// console.log('ad');

// task 2 ve 3 ve 3.5
// let body = document.querySelector("body")
// let esli = document.createElement("button") 
// let input=document.getElementById('ad')

// esli.textContent = "Salam"

// input.addEventListener('input',function(){
//     console.log(input.value);
// })
// esli.addEventListener("click" , function(){
//     let inputValue = input.value
//     alert(inputValue)
//     input.value = ""
// })
// body.append(esli)

// task 4
// let body=document.querySelector("body")
// let input=document.createElement('input')
// let yesli=document.createElement("button")
// let container=document.createElement('div')
// let button=document.createElement("button")

// button.textContent="dear buttttototon"

// container.classList.add("container")

// yesli.textContent="add"

// button.addEventListener("click", function(){
//     let div = document.createElement("div")
//     div.textContent = 'QGDADFU'
//     container.append(div)
// }) 

// body.append(input)
// body.append(yesli)
// body.append(button)
// body.append(container)

// sekil taski
// elementleri verdim 
let add=document.querySelector('.add')
let container=document.querySelector('.container')
// click ucun yaradiram 
add.addEventListener('click',(event)=>{
    // elementleri creat edirem append verirem sonda 
    event.preventDefault()
    let div=document.createElement('div')
    let leftPart=document.createElement('div')
    let rightPart=document.createElement('div')

    // classliste elave edirem
    leftPart.classList.add('leftPart')
    rightPart.classList.add('rightpart')
    console.log(div);
    div.classList.add('div')
    div.append(leftPart,rightPart)
    container.append(div)


})



