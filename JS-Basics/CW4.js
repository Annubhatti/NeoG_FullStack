// Error handling in JS
// error: error is just an event which distrupt your code with the nomal flow of execution of code

// Complie time error is before the execution of code in the parsing of JS code.

console.log 1; //syntax error

//While the code is executing  error is detected is know as Run-time .

console.log(x); // runtime refference error

// Handeling

//1. try-catch block

try{
    console.log("try block starts here");
    console.log(x);
    console.log("try block end here");
}
catch(error){
    // inside this you write app eeror ke sath kya krna chahte hai
    console.log("I am inside catch block");
    console.log("Your error is here: ", error);
}
finally{
    console.log("I will run everytime, as im finally block: ");
}
// finally block means it will always execute error ocurred or not

// you can create custom error with the help of throw keyword

try{
    console.log("try block starts here");
    console.log(x); // reference error
    console.log("try block end here");
}
catch(error){
    // inside this you write app eeror ke sath kya krna chahte hai
    throw new Error(" first declare than use");
}


