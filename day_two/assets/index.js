console.log("day two working...")


/// variable initlization var/let/const 

// variable and it's scopes and lifetime

// {
//     var name = "pawan"; // initlization
// }

let name = "kanu"; //  global
let name1 = "kanu";

{
    console.log(name1) // global
    let name = "pawan"; // local scope
    let name2 = "deep"
    console.log(name)
    console.log(name2)
}

{
    let name = "Kamal"; // local
    console.log(name)  
}

console.log(name) // global
