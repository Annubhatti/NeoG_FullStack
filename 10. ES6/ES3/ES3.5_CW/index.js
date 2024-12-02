// restructuring and renameing

// function to rename params of an objects using restructuring

const printPersonDetails = ({name: personName, age: personAge}) => {
    console.log(`Person: ${personName}, Age: ${personAge}`)
}
printPersonDetails({name: "Alice", age:25})

// function to rename properties in an array using restructuring

const printFruits = ([fruitName, fruitColor]) => {
    console.log(`Fruits: ${fruitName} is  ${fruitColor} in color.`)
}
printFruits(["Alice", "Red"])

// frunction to print book details using restructuring

const printBookInfo = ({title: bookTitle, author: {name: authorName, nationality}}) => {
    console.log(`Book: ${bookTitle}, Author: ${authorName}, Nationality: ${nationality}`)
}
printBookInfo({title: "JavaScript Basics", author: {name: "John Deo", nationality: "American"}})

const displayPerson = ({name: personName = "Bob", age: personAge = 28}) => {
    console.log(`Person Name: ${personName}, Person Age: ${personAge}`)
}
displayPerson({})