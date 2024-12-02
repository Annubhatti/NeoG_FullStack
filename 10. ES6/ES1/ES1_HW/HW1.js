/**
 * 1. Write a program to increment age by 1 if birthday.
 * Expected Output
Program 1:
Current Age: 26

 const isBirthday = true;
  // your code here


  console.log("Program 1:");
  console.log(`Current Age: ${age}`);
  console.log("\n");

 */

  const isBirthday = true; 
let age = 25
if(isBirthday)
{
    age++ 
}

  console.log("Program 1:");
  console.log(`Current Age: ${age}`);
  console.log("\n");

  /**
   * 2. The condition has been written to print the message. Declare all the necessary variables needed and calculate ticket price based on age. Use appropriate declarations. If the passenger age is greater than 60, then there is a 15% discount on the ticket price.

  Expected Output

Program 2:
Ticket price for age less than or equal to 60:100

// your code here


  if (passengerAge > 60) {
    console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
  } else {
    console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
  }
  console.log("\n");
   */

  // your code here
const passengerAge = 35
const discountedPrice = 15;
const ticketPrice = 100

console.log("Program 2:");

  if (passengerAge > 60) {
    console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
  } else {
    console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
  }
  console.log("\n");

  /**
   * 3. Declare three variables, num1, num2 and num3 and write a program to find out if third number the largest. Print appropriate message as per the values taken.

Output for question 1, 2 and 3:

Expected Output
Program3:
The Third number 15 is not the largest.

   */
let num1 = 5
let num2 = 20
let num3 = 15
console.log("Program 3:");
if(num1 > num3 || num2>num3){
    console.log(`The third number ${num3} is not the largest`)

}



/**
 * 4. Define four items (Saree, Kurta, Jeans, Shoes) and their respective prices in a shopping cart. Use appropriate variable declarations. Calculate the total cart price by summing up the individual prices of all items.

Determine the delivery charge status based on the total cart price. If the total cart price is less than 1999, set an optional delivery charge of 99 and update the total cart price accordingly. If the total cart price is 1999 or more, indicate "No Delivery Charge" in the delivery charge status. Finally print the Shopping Cart with Optional Delivery Charge.

Output for question 4:
PRogram4:

shopping Cart:
--------------------------
Item:Saree, Price: 500
Item:Kurta, Price: 300
Item:Jeans, Price: 900
Item:Shoes, Price: 400
----------------------------
Delivery Charges: No Delivery Charge
----------------------------
Total Cart Price: 2100
 */
 
const shoppingCart = [
    { Item: "Saree", Price: 500 },
    { Item: "Kurta", Price: 300 },
    { Item: "Jeans", Price: 900 },
    { Item: "Shoes", Price: 400 },
];

// Calculate the total cart price
let totalCartPrice = shoppingCart.reduce((total, item) => total + item.Price, 0);

// Determine delivery charge status
let deliveryCharges;
if (totalCartPrice < 1999) {
    deliveryCharges = 99;
    totalCartPrice += deliveryCharges;
} else {
    deliveryCharges = "No Delivery Charge";
}

// Print the shopping cart details
console.log("Program 4:");
console.log("\nShopping Cart:");
console.log("--------------------------");
shoppingCart.forEach(item => {
    console.log(`Item: ${item.Item}, Price: ${item.Price}`);
});
console.log("----------------------------");
console.log(`Delivery Charges: ${deliveryCharges}`);
console.log("----------------------------");
console.log(`Total Cart Price: ${totalCartPrice}`);



/**
 * 5. Declare appropriate variable and write code to check if a number is positive or negative.

If the number is greater than zero, print a message indicating that the number is positive.
If the number is less than zero, print a message indicating that the number is negative.
If the number is exactly zero, print a message indicating that the number is zero.
Expected Output:
Program5:
the number is positive.
 */

let num = 3;
console.log("Program 5:");
if(num > 0){
    console.log("The number is positive.")
}else if(num<0){
    console.log("The number is negative.")
}else{
    console.log("The number is zero.")
}

/**
 * 6. Find the students with highest marks. Declare three variables marks1, marks2 and marks3 to represent the marks of three students. Assign them the values 85, 90, and 78, respectively. Declare three variables for student names student1, student2 and student3. Assign them the values Rahul, Priya, and Tina, respectively.

If student1 has the highest marks, print a message to the console indicating that student 1 has the highest marks, in the following format: "Rahul has the highest marks: {marks1}". Print similar message if any other student has highest marks.
Output for question 5 and 6:

Expected Output:
Program 6:
Priya, scored the highest marks.

 */


let marks1 = 85
let marks2 = 90
let marks3 = 78

let student1 = "Rahul"
let student2 = "Priya"
let student3 = "Tina"

console.log("Program 6:");
// Determine the student with the highest marks
if (marks1 > marks2 && marks1 > marks3) {
    console.log(`${student1} has the highest marks: ${marks1}`);
} else if (marks2 > marks1 && marks2 > marks3) {
    console.log(`${student2} has the highest marks: ${marks2}`);
} else {
    console.log(`${student3} has the highest marks: ${marks3}`);
}
 
