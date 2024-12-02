// Callback: a function that is passed as an argument to the another function
// so that passed function can be call later whenever u need
// callbacks achived with the help of tradional fun and arrow function both
// greet user function is higher orderfunction
function greetUser(username, callback){
    let message = "Good Morning, " + username

    callback(message)
}

function logMessage(message) { 
    console.log(message)
 }

 // we are using for () if we use it that logmessage  function will execute here
 greetUser("Alice", logMessage)


 // use it with arrow function

 const greetUser = (username, callback) => {
    let message = "Good Morning, " + username

    callback(message)
 }

 const logMessage = (message) => {
    console.log(message)
 }
 greetUser("Alice", logMessage)

 // you have a btn
 // eg: btn.addEventListener("click", function(){}) // this function also is a callback function

