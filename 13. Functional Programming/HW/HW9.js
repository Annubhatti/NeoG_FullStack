//1. Given an array of objects representing students, filter out the students with a grade lower than 70%.
// Output: [ { name: 'Alice', grade: 80 }, { name: 'Charlie', grade: 90 } ]
const studentss = [
    { name: "Alice", grade: 80 },
    { name: "Bob", grade: 65 },
    { name: "Charlie", grade: 90 },
  ];
  const filteredStudents = studentss.filter(student => student.grade >= 70);

  console.log(filteredStudents);

  //2. Given an array of objects representing products, filter out the products with a price higher than $1000.
  // Output: [ { name: 'Smartphone', price: 800 }, { name: 'Tablet', price: 500 } ]

  const products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 500 },
  ];
  const filteredProducts = products.filter(product => product.price <= 1000);
  console.log(filteredProducts);
  
//3. Given an array of objects representing employees, filter out the employees with a salary lower than $50,000.
// Output: [{ name: 'Alice', salary: 60000 }, { name: 'Charlie', salary: 70000 }]


const employees = [

  { name: "Alice", salary: 60000 },  

  { name: "Bob", salary: 45000 },

  { name: "Charlie", salary: 70000 },

];  
const filteredEmployees = employees.filter(employee => employee.salary >= 50000);

console.log(filteredEmployees);


//4. Given an array of objects representing movies, filter out movies with a rating lower than 7.0.
// Output: [{ title: 'Inception', rating: 8.8 }, { title: 'Interstellar', rating: 8.6 }, { title: 'The Dark Knight', rating: 9 }]

const movies = [

  { title: "Inception", rating: 8.8 },

  { title: "Interstellar", rating: 8.6 },

  { title: "The Dark Knight", rating: 9.0 },

];
const filteredMovies = movies.filter(movie => movie.rating >= 7.0);

console.log(filteredMovies);




//5. Given an array of objects representing cars, filter out the cars older than 5 years.
// Output: [ { brand: 'Honda', year: 2019 } ]

const cars = [

  { brand: "Toyota", year: 2018 },

  { brand: "Honda", year: 2019 },

  { brand: "Ford", year: 2010 },

];
const filteredCars = cars.filter(car => car.year >= 2018);

console.log(filteredCars);



//6. Given an array of objects representing students, filter out the  students with a GPA lower than 3.5.
// Output: [ { name: 'Alice', gpa: 3.8 }, { name: 'Charlie', gpa: 3.9 } ]


const students = [

  { name: "Alice", gpa: 3.8 },  

  { name: "Bob", gpa: 3.2 },

  { name: "Charlie", gpa: 3.9 },

];  
const filteredStudent = students.filter(student => student.gpa >= 3.5);

console.log(filteredStudent);


//7. Given an array of objects representing fruits, filter out the fruits with a price higher than $2.00 per pound.
// Output: [{ name: 'Apple', pricePerPound: 1.5 }, { name: 'Orange', pricePerPound: 1.8 }]

const fruits = [

  { name: "Apple", pricePerPound: 1.5 },

  { name: "Banana", pricePerPound: 2.2 },

  { name: "Orange", pricePerPound: 1.8 },

];
const filteredFruits = fruits.filter(fruit => fruit.pricePerPound <= 2.00);

console.log(filteredFruits);



//8. Given an array of objects representing employees, filter out the employees who are not currently employed.
// Output: [{ name: 'Alice', employed: true }, { name: 'Charlie', employed: true }]

const employeess = [

  { name: "Alice", employed: true },

  { name: "Bob", employed: false },

  { name: "Charlie", employed: true },
];

const employedEmployees = employeess.filter(employee => employee.employed);

console.log(employedEmployees);


//9. Given an array of objects representing products, filter out the products that are not in stock.
// Output: [{ name: 'Laptop', inStock: true }, { name: 'Tablet', inStock: true }]

const productss = [
  { name: "Laptop", inStock: true },
  { name: "Smartphone", inStock: false },
  { name: "Tablet", inStock: true },
];
const inStockProducts = productss.filter(product => product.inStock);

console.log(inStockProducts);



//10. Given an array of objects representing laptops, filter out the laptops with a screen size less than 15 inches.
// Output: [{ brand: 'HP', screenSize: 15.6 }, { brand: 'Acer', screenSize: 17 }]

const laptops = [
  { brand: "Dell", screenSize: 14 },
  { brand: "HP", screenSize: 15.6 },
  { brand: "Lenovo", screenSize: 13 },
  { brand: "Acer", screenSize: 17 },

];

const largeLaptops = laptops.filter(laptop => laptop.screenSize >= 15);

console.log(largeLaptops);