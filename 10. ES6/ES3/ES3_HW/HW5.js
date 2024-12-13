/**
 * 1. Write an arrow function that creates an object with a dynamic field based on the provided key and value.

console.log(createObjectWithDynamicField("name", "Alice"));
// Output: { name: "Alice" }

console.log(createObjectWithDynamicField("age", 25));
// Output: { age: 25 }

2. Write an arrow function that adds a dynamic field to an existing object.

console.log(addObjectField({ name: "Bob", age: 30 }, "city", "New York"));
// Output: { name: "Bob", age: 30, city: "New York" }

console.log(addObjectField({ fruit: "apple", color: "red" }, "quantity", 3));
// Output: { fruit: "apple", color: "red", quantity: 3 }

3. Write an arrow function that adds a dynamic field to an existing object.

console.log(addObjField({ productName: "Side Table", color: "Walnut Brown" }, "inStock", true));
// Output: {productName: "Side Table", color: "Walnut Brown", inStock: true}

console.log(addObjField({ productName: "Dining Table", color: "White" }, "inStock", false));
// Output: {productName: "Dining Table", color: "White", inStock: false}

4. Write an arrow function that updates a field dynamically in an existing object.

console.log(updateObjectField({ name: "Charlie", age: 28 }, "age", 29));
// Output: {name: "Charlie", age: 29 }

console.log(updateObjectField({ city: "Paris", country: "France" }, "country", "Spain"));
// Output: {city: "Paris", country: "Spain" }

5. Write an arrow function that updates a field dynamically in an existing object.

console.log(updateProductObject({ productName: "Side Table", inStock: true}, "inStock", false));
// Output: {productName: "Side Table", inStock: false }

console.log(updateProductObject({ productName: "Dining Table", color: "White", inStock: false}, "inStock", true));
// Output: {productName: "Dining Table", color: "White", inStock: true}

6. Write an arrow function that dynamically generates an object with multiple fields.

console.log(generateObject("animal", "Dog", "sound", "Bark"));
// Output: { animal: "Dog", sound: "Bark" }

console.log(generateObject("fruit", "Banana", "color", "Yellow"));
// Output: { fruit: "Banana", color: "Yellow" }

7. Write an arrow function that dynamically generates an object with multiple fields.

console.log(generateObj("mealType", "Lunch", "meal", "Rice-Dal", "calorie", "200 Cal"));
// Output: { mealType: "Lunch", meal: "Rice-Dal", calorie: "200 Cal" }

console.log(generateObj("mealType", "Dinner", "meal", "Chapati-Dal", "calorie", "180 Cal"));
// Output: { mealType: "Dinner", meal: "Chapati-Dal", calorie: "180 Cal" }

8. Write an arrow function that creates an object with a dynamic field based on the provided key and value.

console.log(createNewObjectWithDynamicField("name", "Maze", "favColor", "Pink", "isMarried", false));
// Output: { name: "Maze", favColor: "Pink", isMarried: false }

console.log(createNewObjectWithDynamicField("age", 35, "hobby", "Cooking", "isMarried", true));
// Output: { age: 35, hobby: "Cooking", isMarried: true }
 */

const createObjectWithDynamicField = (key, value) => ({[key] : value}); 
    
console.log(createObjectWithDynamicField("name", "Alice"));
console.log(createObjectWithDynamicField("age", 25));

const addObjectField = (obj, key, value) => ({ ...obj, [key]:value});
console.log(addObjectField({ name: "Bob", age: 30 }, "city", "New York"));
console.log(addObjectField({ fruit: "apple", color: "red" }, "quantity", 3));

const addObjField = (obj, key, value) => ({ ...obj, [key]:value});
console.log(addObjField({ productName: "Side Table", color: "Walnut Brown" }, "inStock", true));
console.log(addObjField({ productName: "Dining Table", color: "White" }, "inStock", false));

const updateObjectField = (obj, key, value) => ({
    ...obj , [key] : value
})
console.log(updateObjectField({ name: "Charlie", age: 28 }, "age", 29));
console.log(updateObjectField({ city: "Paris", country: "France" }, "country", "Spain"));

const updateProductObject = (obj, key, value) => ({...obj, [key]:value})
console.log(updateProductObject({ productName: "Side Table", inStock: true}, "inStock", false));
console.log(updateProductObject({ productName: "Dining Table", color: "White", inStock: false}, "inStock", true));

const generateObject = (key1, value1, key2, value2) => ({ [key1]: value1, [key2]: value2 });

console.log(generateObject("animal", "Dog", "sound", "Bark"));

console.log(generateObject("fruit", "Banana", "color", "Yellow"));

const generateObj = (key1, value1, key2, value2, key3, value3) => ({[key1]: value1, [key2]: value2, [key3]:value3});
console.log(generateObj("mealType", "Lunch", "meal", "Rice-Dal", "calorie", "200 Cal"));
console.log(generateObj("mealType", "Dinner", "meal", "Chapati-Dal", "calorie", "180 Cal"));

const createNewObjectWithDynamicField = (key1, value1, key2, value2, key3, value3) => ({[key1]: value1, [key2]: value2, [key3]:value3});
console.log(createNewObjectWithDynamicField("name", "Maze", "favColor", "Pink", "isMarried", false));
console.log(createNewObjectWithDynamicField("age", 35, "hobby", "Cooking", "isMarried", true));