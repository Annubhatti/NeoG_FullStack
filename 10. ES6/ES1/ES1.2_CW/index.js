// Block scop:
let a= 2

// we can access above variable below
if(true){
    console.log(a)
}
// same for function
let num = 100

function printNum(){
    console.log(num) // gives us error cannot access num before initilataion
    let num = 40
    console.log(num)
}
console.log(num)


// if u declare inside the if condition u can not access outside

// let and const both are block scoping


// globaly declare
let num1 = 30

if(true){
    num1  = 20
    console.log(num1)
}
console.log(num1)
