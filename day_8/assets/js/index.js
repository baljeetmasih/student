console.log('working..')

let objects = [
    {
        name : "kamal"
    }
]


console.log('position 1')

// window.onload = function () {
//     document.write("<h1>First Element<h1>");
//     let h2 = document.createElement("h2")
//     h2.innerHTML = "Welcome .."
//     document.body.appendChild(h2)
// }



let block = document.querySelector('.block')

console.log(window.outerHeight)
console.log(window.outerWidth)


window.onresize =  function () {

    if(window.innerWidth < 768){
        // window.location.href = 'https://www.google.com/'

        console.log("i am using mobile version")
        block.style.background = 'red'
    }else{
        console.log("i am using desktop version")
        block.style.background = 'blue'
    }
    // console.log(window.innerHeight)
    // console.log(window.innerWidth)
}


document.addEventListener("scroll", function(e){
    console.log()
})

window.scroll = function (e) {
    console.log(e, 'scroll')
}


// decision making 

if(true) 
  console.log('valid')
else
  console.log('invalid')

