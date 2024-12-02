// spread operators(...) used for don't change the value of orignail object/array

//duplicate an array

let numbersArr = [1,2,4]

//let newNumbersArr  = numbersArr // with this line of code we copied orignal array into copy array they both are pointing same memory location to avoid this we use spread operatos
let newNumbersArr  = [...numbersArr]
newNumbersArr.push(4)
console.log(newNumbersArr)
console.log("orignal array: ",numbersArr)

const duplicateArray = (arr) => [...arr]
console.log(duplicateArray(["apple", "banana"]))

// adding new element to an array

const addnewElement = (arr,element) => [...arr,element]
console.log(addnewElement(["kiwi", "orange"],"apple"))

// combining two arrays

const combineArray = (arr1, arr2) => [...arr1, ...arr2]
console.log(combineArray([1,22,33], [14,15,16]))


// coping an array of objects

const copyObject = (obj, key, value) => ({...obj, [key]: value})
console.log(copyObject({name: "Alice", age: 20}))
//and then adding a property to object
console.log(copyObject({name: "Alice", age: 20}, "favColor", "blue"))