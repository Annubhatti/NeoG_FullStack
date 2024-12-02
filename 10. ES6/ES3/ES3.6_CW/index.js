// shorthand

let personName = "Maze"
let age = 20

/*const obj = {
    personName: personName,
    age: age
}

const obj1 = {personName,age} */

const createPerson = (personName, age) => {
    return {personName, age}
}
console.log(createPerson(personName,age))

