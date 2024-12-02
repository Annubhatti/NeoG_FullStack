// let variable

let numericVAriable = 42;
console.log(numericVAriable)

let stringVariable = "Hello! World"
console.log(stringVariable)

let firstName = "John"
let lastNamne= "Doe"
let  fullName = firstName + " " + lastNamne
console.log(fullName)

let numberVariable = 10
numberVariable = 20
console.log(numberVariable)

let num1 = 10
let num2 = 5
let sum = num1 + num2
let difference = num1 - num2

console.log('Sum: ', sum)
console.log('Difference:', difference)

let newName;
newName = "Akanksha"
console.log(newName)

// const variables

const numericConst = 30
console.log(numericConst)

const stringConst = "Hello! Const"
console.log(stringConst)

// this will give you syntax error because u have to initialize the variable const
//const newConstVariable
const newConstVariable = 42

const numericArr = [1, 2, 3, 4, 5] // if i reassign this array it will give me a typeError
console.log(numericArr)

numericArr[0] = 9 // value u can change but u can't reAssign 
console.log(numericArr)

const obj = {
    name: "Annu",
    age: 24
}

obj.name = "Bob"
console.log(obj)

// when u know your value is static in whole the process then u have to use const vaiables 
// if u want in future change the value then u can use let vaiables 

