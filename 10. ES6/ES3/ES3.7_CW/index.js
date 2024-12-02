// template literals

// a function to concatenate strings

const createMessage = (item, quantity) => {
    return `You have ${quantity} ${item}${quantity > 1 ? "s":""}`
}

console.log(createMessage("apple", 3))
console.log(createMessage("Guava", 1))

//a function to create a URL 

const genrateUrl = (endpoint, params) => {
    return `https://api.example.com/${endpoint}?${params}`
}

console.log(genrateUrl("users", "page=1&limit=10"))
