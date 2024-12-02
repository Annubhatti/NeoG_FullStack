/**
 * 
1. Create a function called calculateSalary that takes two arguments called hoursWorked and hourlyRate. Inside the function, calculate the total salary. Return the salary. Call the function with two arguments and console.log the result.


 */

// Define the calculateSalary function
function calculateSalary(hoursWorked, hourlyRate) {
    // Calculate the total salary
    let salary = hoursWorked * hourlyRate;
    // Return the salary
    return salary;
}

// Call the function with arguments and log the result
let totalSalary = calculateSalary(40, 25); // Example: 40 hours and $25 hourly rate
console.log(`Total Salary: $${totalSalary}`);


/**
 * 2. Create a function called `calculateBonus` that takes three arguments called `workedHours`, `marks`, and `salary`. Use appropriate variable declarations. Inside the function, check the eligibility for a bonus based on the following criteria:

- If `workedHours` is greater than 25 and `marks` is greater than 85, calculate a 10% bonus on the `salary` and return the updated salary.

- If `workedHours` is greater than 15 and `marks` is greater than 75, calculate a 5% bonus on the `salary` and return the updated salary.

- If none of the above conditions are met, return the `salary` without any bonus.

// code to call the function
console.log(calculateBonus(20, 80, 5000));

 */

function calculateBonus(workedHours, marks, salary){

    // Check the eligibility for bonus
    if (workedHours > 25 && marks > 85) {
        // Calculate 10% bonus
        salary += salary * 0.1;
    } else if (workedHours > 15 && marks > 75) {
        // Calculate 5% bonus
        salary += salary * 0.05;
    }
    // Return the updated salary
    return salary;
}
console.log(calculateBonus(20, 80, 5000));

/**
 * 3. Create a function called calculateFinalAmount that calculates the final amount of a cart. The function takes four arguments called price1, quantity1, price2 and quantity2. Inside the function, calculate the total price of quantity1 and add it to the total price of quantity2 to get the final amount. Return the total amount. Use appropriate variable declarations.

// code to call the function
console.log(calculateFinalAmount(200, 10, 500, 5));
 */

function calculateFinalAmount(price1, quantity1, price2, quantity2){
    // Calculate the total price for both items
    let totalPrice1 = price1 * quantity1;
    let totalPrice2 = price2 * quantity2;

    // Calculate the final amount
    let finalAmount = totalPrice1 + totalPrice2;

    // Return the final amount
    return finalAmount;
}
console.log(calculateFinalAmount(200, 10, 500, 5));


/**
 * 4. Create a function called calculateAllowance that takes three arguments: age, isStudent and baseAllowance. Inside the function, determine the additional allowance based on the following criteria:

If age is less than 18 and isStudent is true, add 100 to the baseAllowance and return the updated allowance.
If age is between 18 and 25 (inclusive of both 18 and 25) and isStudent is true, add 50 to the baseAllowance and return the updated allowance.
If none of the above conditions are met, return the original baseAllowance.
Call the function with three arguments (age as 16, isStudent as true and base allowance as 500). Print the final output. Use appropriate variable declarations.
 */

function calculateAllowance(age, isStudent, baseAllowance){
    if(age < 18 && isStudent)
    {
       
        return baseAllowance+100;
    }
    else if(age >= 18 && age <= 25 && isStudent){
        return baseAllowance+50;
    }else{
        return baseAllowance;
    }
}
console.log(calculateAllowance(16,true,500))

/**
 * 5. Create a function called calculateShippingCost that takes three arguments: totalWeight, country, and baseCost. Inside the function, calculate the shipping cost based on the following criteria:

If totalWeight is less than or equal to 1 kg and country is "Local", add 10 to the baseCost and return the updated cost.
If totalWeight is greater than 1 kg and country is "International", add 20 to the baseCost and return the updated cost.
If none of the above conditions are met, return the baseCost without any additional charges.
Call the function with three arguments (total weight as 0.5, country as “Local” and base cost as 50). Print the final output. Use appropriate variable declarations.

 */

// Define the calculateShippingCost function
function calculateShippingCost(totalWeight, country, baseCost) {
    // Check the shipping cost criteria
    if (totalWeight <= 1 && country === "Local") {
        baseCost += 10; // Add 10 for local shipping
    } else if (totalWeight > 1 && country === "International") {
        baseCost += 20; // Add 20 for international shipping
    }
    // Return the updated cost
    return baseCost;
}

// Call the function with the given arguments and print the result
let finalCost = calculateShippingCost(0.5, "Local", 50);
console.log(`Final Shipping Cost: ${finalCost}`);
