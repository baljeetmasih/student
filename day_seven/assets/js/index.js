
// let name = document.getElementById('kamal');
// name.innerText = "Deep"

// let name = document.querySelector('.kamal');

// console.log(name.innerHTML = "<h2>KAMAL</h2>")


// let name = document.querySelectorAll('.kamal');
// console.log(name[0].innerHTML = "Kamal")
// console.log(name[1].innerHTML = "pawan")
// console.log(name[2].innerHTML = "pawan")

// let name = document.getElementsByClassName('kamal');
// console.log(name[2].innerHTML = "pawan")

// let tags = document.getElementsByTagName('li');
// tags[10].style.color = 'white'
// tags[10].style.backgroundColor = 'red'

// let name = document.gete

// let name = document.getElementsByClassName('.kamal');
// tags[9].style.color='white'
// tags[9].style.backgroundColor='red';


// document.querySelector
// document.querySelectorAll
// document.getElementById
// document.getElementsByName
// document.getElementsByTagName
// document.getElementsByClassName


let list = document.querySelectorAll('li');

console.log(list[0].classList)
console.log(list[0].classList.add("deep"))
console.log(list[0].classList.remove("kamal"))

list[0].addEventListener("click", ()=>{
    list[0].classList.toggle("kamal")
})


// let heading = document.querySelector('.heading')
// heading.outerHTML = '<h3 class="heading">Assessing Elements</h3>' 

// console.log(heading.textContent)

// console.log(list[0].classList.toggle("kamal"))



// console.log(list[0].getAttribute("xyz"))
// list[0].setAttribute("xyz","hi")
// list[0].removeAttribute('xyz1')
// list[4].remove()

// if(list[0].hasAttribute('xyz1')){
//     list[0].style.color = "red"
// }
// console.log(list[0].hasAttribute('xyz'))


// Event?

// document.querySelector('body').addEventListener("mouseenter", ()=>{
//     let li = document.querySelectorAll('li');
//     for(let i = 0; i < li.length; i++){
//         li[i].style.background = 'red'
//     }
// })



// create element with the help of js

// let createElement  = document.createElement("h1")
// let body = document.body

// createElement.className = "xyz"
// createElement.textContent = "sdfsdfsdf"

// document.body.appendChild = createElement




/// events 



let heading  = document.querySelector('.heading');

//Focus
//Inputs

// mouse event 
    // click
    // mouseover
    // mouseout
    // mousedown
    // mouseup
    // mousemove

// Keyboard events:
    // Keydown 
    // Keyup
    // change

// Event Performed	
    // focus
    // submit
    // blur
    // change
// Event Performed	
    // load
    // unload	
    // resize

let init = heading.innerHTML

let input = document.querySelector('input[id="xyz"]')

let select = document.querySelector('#select')

let popup = document.querySelector('.popup')
// input.addEventListener("keyup",function(){
//     console.log("keyup")
// })

// input.addEventListener("keydown",function(){
//     console.log("keydown")
// })


select.addEventListener("change",function(e){
    let val = e.target.value

    if(val == 2004 || val == 2005){
        popup.style.display = 'block'
    }else{
        popup.style.display = 'none'

    }
})

// input.addEventListener("keyup",function(){
//     console.log("keyup")
// })

// heading.addEventListener("mouseover", function(){
//     heading.style.color = 'red'
//     heading.innerHTML = init+' mouseover'
// })

// heading.addEventListener("mouseout", function(){
//     heading.style.color = 'black'
//     heading.innerHTML = init+' mouseout'
// })

// heading.addEventListener("mousedown", function(){
//     heading.style.color = 'red'
//     heading.innerHTML = init+' mousedown'
// })

// heading.addEventListener("mouseup", function(){
//     heading.style.color = 'black'
//     heading.innerHTML = init+' mouseup'
// })

// heading.addEventListener("mouseleave", function(){
//         heading.style.color = 'red'
//         heading.innerHTML = init+' mouseleave'
// })
    
// heading.addEventListener("mouseenter", function(){
//     heading.style.color = 'black'
//     heading.innerHTML = init+' mouseenter'
// })

heading.addEventListener("mousemove", function(e){
    console.log(e)
    heading.style.color = 'black'
    heading.innerHTML = init+' mouseenter'
})


document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
