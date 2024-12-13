// 1. Given an array of objects representing students with exam scores, add a new property indicating whether they passed or failed using `.map()`. 60 and above is the passing score.

// const students = [

//   { name: "Alice", score: 85 },

//   { name: "Bob", score: 55 },

//   { name: "Charlie", score: 75 },

// ];

// // output:

// [

//   { name: 'Alice', score: 85, passed: true },

//   { name: 'Bob', score: 55, passed: false },

//   { name: 'Charlie', score: 75, passed: true }

// ]

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 75 },
];

const studentScores = students.map((stu) => ({...stu,
  passed: stu.score > 60 }) ) 
console.log(studentScores)

// 2. Given an array of objects representing songs with durations (in seconds), convert durations to minutes using .map().

// const songs = [

//   { title: "Bohemian Rhapsody", duration: 367 },

//   { title: "Hotel California", duration: 420 },

//   { title: "Stairway to Heaven", duration: 482 },

// ];

// // Output:

// [

//   { title: 'Bohemian Rhapsody', duration: '6:7' },

//   { title: 'Hotel California', duration: '7:0' },

//   { title: 'Stairway to Heaven', duration: '8:2' }

// ]

const songs = [
  { title: "Bohemian Rhapsody", duration: 367 },
  { title: "Hotel California", duration: 420 },
  { title: "Stairway to Heaven", duration: 482 },
];

const songsWithFormattedDuration = songs.map(song => {
  const minutes = Math.floor(song.duration / 60);
  const seconds = song.duration % 60;
  return {
    title: song.title,
    duration: `${minutes}:${seconds}`
  };
});

console.log(songsWithFormattedDuration)
// 3. Given an array of objects representing employees with monthly salaries, extract the salaries and calculate the annual income using .map().

// const employees = [

//   { name: "Alice", salary: 50000 },

//   { name: "Bob", salary: 60000 },

//   { name: "Charlie", salary: 70000 },

// ];

// // Output:

// [

//   { name: 'Alice', salary: 50000, annualIncome: 600000 },

//   { name: 'Bob', salary: 60000, annualIncome: 720000 },

//   { name: 'Charlie', salary: 70000, annualIncome: 840000 }

// ]

const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 },
];
const totalIncome = employees.map((emp) => {
  
  const annualIncome = (emp.salary * 12);
  return{
    name: emp.name,
    salary: emp.salary,
    annualIncome:`${annualIncome}`
  }

}
);
console.log(totalIncome);
// 4. Given an array of objects representing students with ages, extract the ages and classify them as "adult" or "minor" using .map(). 18 and above is an adult.

// const newStudents = [

//   { name: "Alice", age: 22 },

//   { name: "Bob", age: 17 },

//   { name: "Charlie", age: 25 },

// ];

// // Output:

// [

//   { name: 'Alice', age: 22, classification: 'adult' },

//   { name: 'Bob', age: 17, classification: 'minor' },

//   { name: 'Charlie', age: 25, classification: 'adult' }

// ]

const newStudents = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
];
const studentsAge = newStudents.map((stu)=>{
  const classification = stu.age >= 18 ? "adult" : "minor";
  return{
    name: stu.name,
    age: stu.age,
    classification: `${classification}`
  }
})
console.log(studentsAge);

// 5. Given an array of objects representing employees with salaries, use .map() to add $ sign to the salaries. 

// const employees = [

//   { name: "Emily", salary: 60000 },

//   { name: "David", salary: 45000 },

//   { name: "Grace", salary: 75000 },

// ];

// // Output:

//  [ { name: 'Emily', salary: '$60000' },

//  { name: 'David', salary: '$45000' },

// { name: 'Grace', salary: '$75000' } ]

const employeees = [
  { name: "Emily", salary: 60000 },
  { name: "David", salary: 45000 },
  { name: "Grace", salary: 75000 },
];
const employeesWithFormattedSalaries = employeees.map(employee => ({
  ...employee,
  salary: `$${employee.salary}`
}));

console.log(employeesWithFormattedSalaries);

// 6. Given an array of objects representing products with prices, use .map() to label them as "expensive" or "affordable." Consider products with prices of $100 and above as "expensive."

// const products = [

//   { name: "Laptop", price: 1200 },

//   { name: "Headphones", price: 50 },

//   { name: "Smartphone", price: 800 },

// ];

// // Output:

// [ { name: 'Laptop', label: 'expensive' },

// { name: 'Headphones', label: 'affordable' },

// { name: 'Smartphone', label: 'expensive' } ]

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 50 },
  { name: "Smartphone", price: 800 },
];

const labeledProducts = products.map(product => ({
  name: product.name,
  label: product.price >= 100 ? "expensive" : "affordable"
}));

console.log(labeledProducts);


// 7. Given an array of objects representing books with publication years, use .map() to categorise them as "modern" or "classic." Assume books published in or after the year 2000 are considered "modern."

// const books = [

//   { title: "The Catcher in the Rye", year: 1951 },

//   { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },

//   { title: "The Hunger Games", year: 2008 },

// ];

// // Output:

// [ { title: 'The Catcher in the Rye', category: 'classic' },

// { title: "Harry Potter and the Sorcerer's Stone", category: 'classic' },

// { title: 'The Hunger Games', category: 'modern' } ]

const books = [
  { title: "The Catcher in the Rye", year: 1951 },
  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  { title: "The Hunger Games", year: 2008 },
];

const categorizedBooks = books.map(book => ({
  title: book.title,
  category: book.year >= 2000 ? "modern" : "classic"
}));

console.log(categorizedBooks);


// 8. Given an array of objects representing software developers with hourly rates and hours worked per week, use .map() to calculate their annual income. Assume 50 weeks per year.

// const developers = [

//   { name: "John", hourlyRate: 40, hoursPerWeek: 30 },

//   { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },

//   { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },

// ];

// // Output:

// [ { name: 'John', annualIncome: 60000 },

// { name: 'Lisa', annualIncome: 87500 },

// { name: 'Mike', annualIncome: 90000 } ]

const developers = [
  { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
  { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },
  { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
];

const developersWithAnnualIncome = developers.map(developer => ({
  name: developer.name,
  annualIncome: developer.hourlyRate * developer.hoursPerWeek * 50
}));

console.log(developersWithAnnualIncome);


// 9. Given an array of objects representing sales representatives with monthly commissions, use .map() to calculate their annual income assuming a fixed base salary of $50000.

// const salesReps = [

//   { name: "David", monthlyCommission: 8000 },

//   { name: "Helen", monthlyCommission: 10000 },

//   { name: "Ivan", monthlyCommission: 6000 },

// ];

// // Output:

// [

//   { name: 'David', annualIncome: 146000 },

//   { name: 'Helen', annualIncome: 170000 },

//   { name: 'Ivan', annualIncome: 122000 }

// ]

const salesReps = [
  { name: "David", monthlyCommission: 8000 },
  { name: "Helen", monthlyCommission: 10000 },
  { name: "Ivan", monthlyCommission: 6000 },
];

const repsWithAnnualIncome = salesReps.map(rep => ({
  name: rep.name,
  annualIncome: 50000 + rep.monthlyCommission * 12
}));

console.log(repsWithAnnualIncome);


// 10. Given an array of objects representing students with scores, use .map() to convert scores to grades based on the grading system (A, B, C, D, F).

// const students = [

//   { name: "Alice", score: 85 },

//   { name: "Bob", score: 60 },

//   { name: "Charlie", score: 92 },

// ];

// score 90 and above will get "A" grade.

// score 80 and above will get  "B" grade.

// score 70 and above will get "C" grade.

// score 60 and above will get "D" grade.

// score 59 and below will get F grade.

// // Output:

// [ { name: 'Alice', grade: 'B' },

// { name: 'Bob', grade: 'D' },

// { name: 'Charlie', grade: 'A' } ]




const studentsWithGrades = students.map(student => {
  let grade;
  if (student.score >= 90) grade = "A";
  else if (student.score >= 80) grade = "B";
  else if (student.score >= 70) grade = "C";
  else if (student.score >= 60) grade = "D";
  else grade = "F";

  return { name: student.name, grade };
});

console.log(studentsWithGrades);
