// destructuring if u have arr/obj   to extract value from arr/objevt

// to extract elements from array

const extractArrayValues = (arr) => {
    const [first, second, third]=arr // this is syntax for destructuring
}
//its usefule where u have nested objects and arry
extractArrayValues([1,2,3])

//to extract elements from object

const extractValuesfromObj = (obj) => {
    const {name, age, city}=obje // this is syntax for destructuring
    console.log(name)
    console.log(age)
    console.log(city)
    console.log(`${name} is ${age} year old and lives in ${city}`)
}
//its usefule where u have nested objects and arry
extractValuesfromObj({name: "Alice", age:23, city: "Paris"})

// extract values from nested object

const obj1 = {
    id: 1,
    info: {
        title: "JavaScript Basics",
        description: "Learn Fundamentals"
    }
}

const getObjValues = (obj) => {
    const {info: {title,description}} = obj

    console.log(title)
    console.log(description)
}

getObjValues(obj1)