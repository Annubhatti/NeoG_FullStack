// arrow function to return the sum of all numbers in the array

const calculateSum = (numbersArr) => {
    let sum = 0;
    for(let i=0;i<numbersArr.length;i++){
        sum += numbersArr[i];
    }
    return sum
}
console.log(calculateSum([1, 2, 3, 4, 5]));
// arrow function to reverse a string


const reverseStr = (str) => {
    let reversedStr = ""
    for(let i=str.length -1; i>=0; i--){
        reversedStr += str[i];
    }
    return reversedStr
}
console.log(reverseStr("HEllo"));