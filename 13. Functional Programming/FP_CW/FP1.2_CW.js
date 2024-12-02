// how to use map with array of objects / simple objects

// u have given objects array extract names out of all object
const students = [
    {name:"Alice", age: 24},
    {name:"Bob", age: 35},
    {name:"John", age: 45}
]
const names = students.map((student) => student.name)
console.log(names)

// adding grade property to students array  in all of the object

const studentWithGrades = students.map((student) => ({...student, grade: "A"}))
console.log(studentWithGrades);

// calculating BMI and adding to each object
const people = [
    {name:"Alice", weight: 24, height:1.65},
    {name:"Bob", weight: 35, height:2.65},
    {name:"John", weight: 45, height:4.65}
]
const peopleWithBMI = people.map((person) => ({...person, bmi: (person.weight / person.height ** 2).toFixed(2)}))
console.log("People with BMI", peopleWithBMI)

// only objects

// we cann't run map on objects because map only works on array
// so Object.values() gives us a values array hen we apply map on it
const person = {name: "John", age: "30", city: "Delhi"}
const dataInUppercase = Object.values(person).map((value) => value.toUpperCase())
console.log(dataInUppercase)

console.log(Object.keys(person))