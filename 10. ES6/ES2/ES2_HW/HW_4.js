/*

1. Write an arrow function that calculates the average of an array of numbers. Print the average.

    console.log(calculateAverage([5, 10, 15]))
    // Expected output: 10

2. Write an arrow function that reverses a string using for-loop. Print the reversed string.

     console.log(reverseString("world"))
     // Expected output: dlrow

3. Write an arrow function that returns the longest word in an array of words. Print the longest word.

    console.log(findLongestWord(["apple", "banana", "grapefruit"]))
    // Expected output: grapefruit

4. Write an arrow function that calculates the length of a string using for-loop. Print the length.

    console.log(calculateStringLength("hello"))
    // Expected output: 5

5. Given an array of objects:

const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 19, grade: 88 }
];
 5.1 Write an arrow function to calculate the average grade of all students.

        console.log("Average Grade: ", calculateAverageGrade(students))

5.2 Write an arrow function that takes the array of students and returns an array of their names.

      console.log(getNames(students))
      // Expected output: ["Alice", "Bob", "Charlie"]

5.3 Write an arrow function that calculates the average age of students in the array.

      console.log(calculateAverageAge(students))

5.4 Write an arrow function that filters the students with a grade greater than or equal to 90. Use for-loops.

      console.log(highGrades(students))
     // Expected output: [{ name: "Bob", age: 22, grade: 92 }]

5.5 Write an arrow function that checks if there is any student below the age of 18.

      console.log(isAnyBelow18(students))
     // Expected output: false

5.6 Write an arrow function to find a student by their name.

      console.log(findStudentByName(students, "Charlie"))
     // Expected output: { name: "Charlie", age: 19, grade: 88 }

5.7 Write an arrow function to get the names of students who have scored grade above 85.

      console.log(getHighScoreStudents(students))
      // Expected output: ["Bob", "Charlie"]

      */

      const calculateAverage = (arr) => {
            const sum = arr.reduce((acc, num) => acc + num, 0);
            return sum / arr.length;
          };
          
          console.log(calculateAverage([5, 10, 15]));
          // Output: 10

          const reverseString = (str) => {
            let reversed = "";
            for (let i = str.length - 1; i >= 0; i--) {
              reversed += str[i];
            }
            return reversed;
          };
          
          console.log(reverseString("world"));
          
   const findLongestWord = (words) => {
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
};

console.log(findLongestWord(["apple", "banana", "grapefruit"]));



const calculateStringLength = (str) => {
      let length = 0;
      for (let i = 0; i < str.length; i++) {
        length++;
      }
      return length;
    };
    
    console.log(calculateStringLength("hello"));
   
    
    const calculateAverageGrade = (students) => {
      const totalGrade = students.reduce((acc, student) => acc + student.grade, 0);
      return totalGrade / students.length;
    };
    
    console.log("Average Grade: ", calculateAverageGrade(students));
 
    const getNames = (students) => students.map(student => student.name);

    console.log(getNames(students));
    
    const calculateAverageAge = (students) => {
      const totalAge = students.reduce((acc, student) => acc + student.age, 0);
      return totalAge / students.length;
    };
    
    console.log(calculateAverageAge(students));
   
    const highGrades = (students) => {
      const result = [];
      for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 90) {
          result.push(students[i]);
        }
      }
      return result;
    };
    
    console.log(highGrades(students));
    
    const isAnyBelow18 = (students) => {
      return students.some(student => student.age < 18);
    };
    
    console.log(isAnyBelow18(students));
    
    const findStudentByName = (students, name) => {
      return students.find(student => student.name === name);
    };
    
    console.log(findStudentByName(students, "Charlie"));

    const getHighScoreStudents = (students) => {
      return students.filter(student => student.grade > 85).map(student => student.name);
    };
    
    console.log(getHighScoreStudents(students));
    

    
    


    

    
    