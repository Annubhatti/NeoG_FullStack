/*
Given an array: [5, 12, 7, 25, 18, 3]. Solve the following questions in a nodejs REPL and make your submission.

1. Write a function that prints the given array.

2. Write a function that returns a new array with 10 added to each number. Use for-loops. Print the result.

3. Write a function to convert all odd numbers in the array to the nearest even number by adding 1 to them. Print the result. Take the original array as input.

4. From the given array, create a new array with numbers divisible by 2. Print the new array. Take the original array as input.

5. Write a function to print the sum of all numbers in the array. Take the original array as input.

6. Write a function to print the sum of odd numbers and sum of all even numbers in the given array. Take the original array as input.
*/

// Program1.
function printArray(arr){
    console.log("Array :", arr);
}
printArray([5,12,7,25,18,3]);

// Program2.

function addTenToEach(arr){
    let newArray = [];
    for(let i=0;i<arr.length;i++){
       newArray.push(arr[i]+10);
    }
    return newArray;
}
console.log(addTenToEach([5, 12, 7, 25, 18, 3]));

// Program3.

function convertOddToEven(arr){
    let newArray = [];
    for(let i =0; i<arr.length; i++){
        if(arr[i] % 2 !== 0){
            newArray.push(arr[i]+1);
        }else{
            newArray.push(arr[i]);
        }
    }
    return newArray;

}

console.log(convertOddToEven([5, 12, 7, 25, 18, 3]));
// Program4.

function getNumbersDivisibleByTwo(arr){
    let newArray = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(getNumbersDivisibleByTwo([5, 12, 7, 25, 18, 3]));
// Program5.
function printSum(arr) { 
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;

 }

 console.log(printSum([5, 12, 7, 25, 18, 3]));
// Program6.

function getSumOfOddAndEven(arr) {

    let oddSum = 0, evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i]; // Sum of even numbers
        } else {
            oddSum += arr[i]; // Sum of odd numbers
        }
    }
    console.log("Sum of Odd Numbers:", oddSum);
    console.log("Sum of Even Numbers:", evenSum);

}
// Test the function
getSumOfOddAndEven([5, 12, 7, 25, 18, 3]);