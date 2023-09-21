
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


