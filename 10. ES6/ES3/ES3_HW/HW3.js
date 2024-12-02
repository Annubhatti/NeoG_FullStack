/**
 * 1. Write an arrow function that creates a copy of an array and appends a new element to it using the spread operator.

     console.log(copyAndAppend(["apple", "orange"], "banana"));

     // Output: ['apple', 'orange', 'banana']

2. Write an arrow function that creates a copy of an array and appends a new element to it using the spread operator.

     console.log(copyAndAdd([10, 20], 30));

     // Output: [10, 20, 30]

3. Write an arrow function to merge two arrays.

      console.log(mergeArrays([10, 20], [30, 40, 50]));

     // Output: [10, 20, 30, 40, 50]

4. Write an arrow function to merge two arrays.

      console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));

     // Output: ["John", "Mac", "Maze", "Alice", "Bob"]

5. Write an arrow function that creates a copy of an object and adds a property using the spread operator.

    console.log(copyPersonObject({firstName: "Alice", age: 20}, "lastName", "Johnson"))

6. Write an arrow function that creates a copy of an object and adds a property using the spread operator.

    console.log(copyEmployeeObject({employeeId: 243, name: "Bob", age: 20}, "department", "IT department"))

7. Write an arrow function to merge two objects.

     console.log(mergeObjects({ x: "hello" }, { y: "world" })); // Output: { x: "hello", y: "world" }

8. Write an arrow function that creates a copy of an object with modified properties using the spread operator.

     console.log(modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 })); // Output: { name: "Alice", age: 30 }

     console.log(modifyObjectProperties({ fruit: "apple", color: "red" }, { color: "green" }));
     // Output: { fruit: "apple", color: "green" }

9. Write an arrow function that creates a copy of an object with modified properties using the spread operator.

    console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 })); // Output: { a: 1, b: 3, c: 4 }

10. Write an arrow function to merge three arrays using the spread operator.

      console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));

     // Output: [11, 12, 15, 16, 17, 20, 21]

11. Write an arrow function to merge three arrays using the spread operator.

      console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));

     // Output: [1, true, 'Are', 'You', 'Hungry', false, 2]
 */

const copyAndAppend = (arr,element) => {
    return [...arr,element];
}
console.log(copyAndAppend(["apple", "orange"], "banana"));

const copyAndAdd = (arr, element) => {
    return [...arr, element];
  };
  
  console.log(copyAndAdd([10, 20], 30));
  // Output: [10, 20, 30]

  const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
  };
  
  console.log(mergeArrays([10, 20], [30, 40, 50]));
  // Output: [10, 20, 30, 40, 50]

  
  const mergeNameArrays = (arr1, arr2) => {
    return [...arr2, ...arr1];
  };
  
  console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));
  // Output: ["John", "Mac", "Maze", "Alice", "Bob"]

  
  const copyPersonObject = (obj, key, value) => {
    return { ...obj, [key]: value };
  };
  
  console.log(copyPersonObject({firstName: "Alice", age: 20}, "lastName", "Johnson"));
  // Output: { firstName: "Alice", age: 20, lastName: "Johnson" }

  
  const copyEmployeeObject = (obj, key, value) => {
    return { ...obj, [key]: value };
  };
  
  console.log(copyEmployeeObject({employeeId: 243, name: "Bob", age: 20}, "department", "IT department"));
  // Output: { employeeId: 243, name: "Bob", age: 20, department: "IT department" }

  
  const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };
  
  console.log(mergeObjects({ x: "hello" }, { y: "world" }));
  // Output: { x: "hello", y: "world" }

  
  const modifyObjectProperties = (obj, modifications) => {
    return { ...obj, ...modifications };
  };
  
  console.log(modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 }));
  // Output: { name: "Alice", age: 30 }
  
  console.log(modifyObjectProperties({ fruit: "apple", color: "red" }, { color: "green" }));
  // Output: { fruit: "apple", color: "green" }

  
  const mergeObject = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };
  
  console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 }));
  // Output: { a: 1, b: 3, c: 4 }

  const mergeThreeArrays = (arr1, arr2, arr3) => {
    return [...arr1, ...arr2, ...arr3];
  };
  
  console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));
  // Output: [11, 12, 15, 16, 17, 20, 21]

  
  const mergeThreeArray = (arr1, arr2, arr3) => {
    return [...arr1, ...arr2, ...arr3];
  };
  
  console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));
  // Output: [1, true, 'Are', 'You', 'Hungry', false, 2]

  
  

