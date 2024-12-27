// 1. Create a React component to display the total calories burned during exercises.

// const exercises = [

//   { id: 1, name: "Running", caloriesBurned: 300 },

//   { id: 2, name: "Cycling", caloriesBurned: 200 },

//   { id: 3, name: "Swimming", caloriesBurned: 400 },

// ];



// 2. Create a React component to display the total duration of songs with a rating above 3.9.

// const songs = [

//   { id: 1, title: "Song A", duration: 180, rating: 4.2 },

//   { id: 2, title: "Song B", duration: 210, rating: 3.8 },

//   { id: 3, title: "Song C", duration: 150, rating: 4.5 },

// ];



// 3. Given an array of objects representing books, write a React component to find and display all the details of the book titled "The Great Gatsby". Pass the data as props.

// const books = [

//   { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },

//   { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },

//   { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },

// ];



// 4. Given an array of objects representing songs, write a React component to find and display all the details of the song titled "Bohemian Rhapsody". Pass the data as props.

// const songs = [

//   { id: 1, title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },

//   { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },

//   { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },

// ];



// 5. Given an array of objects representing cities, write a React component to find and display the population of the city named "Paris". Pass the data as props.

// const cities = [

//   { id: 1, name: "New York", population: 8500000 },

//   { id: 2, name: "Paris", population: 2200000 },

//   { id: 3, name: "Tokyo", population: 3770000 },

// ];



// 6. Given an array of objects representing products, write a React component to find and display all the details of the product with ID 3. Pass the data as props.

// const products = [

//   { id: 1, name: "Laptop", price: 1200 },

//   { id: 2, name: "Smartphone", price: 800 },

//   { id: 3, name: "Headphones", price: 60 },

// ];



// 7. Given an array of objects representing students, write a React component to find and display all the details (including marks of each subject) of the student "Charlie". Pass the data as props.

// const students = [

//   { id: 1, name: "Alice", age: 20, grades: { math: 90, science: 85, english: 92 } },

//   { id: 2, name: "Bob", age: 22, grades: { math: 78, science: 80, english: 85 } },

//   { id: 3, name: "Charlie", age: 21, grades: { math: 95, science: 88, english: 94 } },

// ];



// 8. Given an array of objects representing orders, write a React component to find and display all the details of the order for customer "Alice Smith". Pass the data as props.

// const orders = [

//   { id: 1, customer: "John Doe", totalAmount: 150, products: [{ id: 101, name: "Widget", quantity: 2 }, { id: 102, name: "Gadget", quantity: 1 }] },

//   { id: 2, customer: "Alice Smith", totalAmount: 200, products: [{ id: 103, name: "Tool", quantity: 1 }, { id: 104, name: "Device", quantity: 3 }] },

//   { id: 3, customer: "Bob Johnson", totalAmount: 100, products: [{ id: 105, name: "Accessory", quantity: 5 }] },

// ];



// 9. Given an array of objects representing employees, write a React component to find and display all the details of the employee with ID 1. Pass the data as props.

// const employees = [

//   { id: 1, name: "Jane Doe", position: "Software Engineer", department: { name: "Engineering", location: "Building A" } },

//   { id: 2, name: "Sam Smith", position: "Marketing Manager", department: { name: "Marketing", location: "Building B" } },

//   { id: 3, name: "Mike Johnson", position: "HR Specialist", department: { name: "Human Resources", location: "Building C" } },

// ];



// 10. Write a React component to calculate and display the total number of items in stock.

// const store = {

//   name: "Tech Emporium",

//   categories: [

//     { id: 1, name: "Electronics", itemDetail: { id: 101, product: "Laptop", inStock: true } },

//     { id: 2, name: "Accessories", itemDetail: { id: 201, product: "Headphones", inStock: true } },

//     { id: 3, name: "Electronics", itemDetail: { id: 301, product: "Heater", inStock: false } },

//   ]

// };

// output:

// Total calories burned during exercises: 900
// Total Duration of High-Rated Songs
// 330 seconds

// Book Details
// Title: The Great Gatsby

// Author: F. Scott Fitzgerald

// Genre: Classic

// Song Details
// Title: Bohemian Rhapsody

// Artist: Queen

// Genre: Rock

// City Population
// Population of Paris: 2200000

// Product Details
// Name: Headphones

// Price: $60

// Student Details
// Name: Charlie

// Age: 21

// Grades:
// Math: 95

// Science: 88

// English: 94

// Order Details
// Customer: Alice Smith

// Total Amount: $200

// Products:
// Tool (Quantity: 1)
// Device (Quantity: 3)
// Employee Details
// Name: Jane Doe

// Position: Software Engineer

// Department:
// Name: Engineering

// Location: Building A

// Total Items in Stock
// 2

import "./App.css";

const Exercises = ({exercises}) => {
  const totalCalories = exercises.reduce((acc, curr) => acc + curr.caloriesBurned,0)
  return(
    <div>
      <h2>Total calories burned during exercises: {totalCalories}</h2>
    </div>
  )
}

const Songs = ({songs}) => {
  const totalDuration = songs
    .filter(song => song.rating > 3.9)
    .reduce((total, song) => total + song.duration, 0);

  return (
    <div>
      <h2>Total Duration of High-Rated Songs</h2>
      <p>{totalDuration} seconds</p>
    </div>
  );
};

const Books = ({books}) =>{
  const book = books.find(b => b.title === "The Great Gatsby");

  return (
    <div>
      <h2>Book Details</h2>
      {book ? (
        <div>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

const Songes = ({songes}) => {
  const song = songes.find(s => s.title === "Bohemian Rhapsody");

  return (
    <div>
      <h2>Song Details</h2>
      {song ? (
        <div>
          <p>Title: {song.title}</p>
          <p>Artist: {song.artist}</p>
          <p>Genre: {song.genre}</p>
        </div>
      ) : (
        <p>Song not found.</p>
      )}
    </div>
  );
};

const Products = ({ products }) => {
  const product = products.find(p => p.id === 3);

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

const Cities = ({ cities }) => {
  const city = cities.find(c => c.name === "Paris");

  return (
    <div>
      <h2>City Population</h2>
      {city ? (
        <p>Population of {city.name}: {city.population}</p>
      ) : (
        <p>City not found.</p>
      )}
    </div>
  );
};

const StudentDetails = ({ students }) => {
  const student = students.find(s => s.name === "Charlie");

  return (
    <div>
      <h2>Student Details</h2>
      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <h3>Grades:</h3>
          <p>Math: {student.grades.math}</p>
          <p>Science: {student.grades.science}</p>
          <p>English: {student.grades.english}</p>
        </div>
      ) : (
        <p>Student not found.</p>
      )}
    </div>
  );
};

const OrderDetails = ({ orders }) => {
  const order = orders.find(o => o.customer === "Alice Smith");

  return (
    <div>
      <h2>Order Details</h2>
      {order ? (
        <div>
          <p>Customer: {order.customer}</p>
          <p>Total Amount: ${order.totalAmount}</p>
          <h3>Products:</h3>
          <ul>
            {order.products.map(product => (
              <li key={product.id}>
                {product.name} (Quantity: {product.quantity})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Order not found.</p>
      )}
    </div>
  );
};


const EmployeeDetails = ({ employees }) => {
  const employee = employees.find(e => e.id === 1);

  return (
    <div>
      <h2>Employee Details</h2>
      {employee ? (
        <div>
          <p>Name: {employee.name}</p>
          <p>Position: {employee.position}</p>
          <h3>Department:</h3>
          <p>Name: {employee.department.name}</p>
          <p>Location: {employee.department.location}</p>
        </div>
      ) : (
        <p>Employee not found.</p>
      )}
    </div>
  );
};


const TotalInStock = ({ store }) => {
  const totalInStock = store.categories.reduce(
    (total, category) => total + (category.itemDetail.inStock ? 1 : 0),
    0
  );

  return (
    <div>
      <h2>Total Items in Stock</h2>
      <p>{totalInStock}</p>
    </div>
  );
};


export default function App() {
  
  const exercises = [

    { id: 1, name: "Running", caloriesBurned: 300 },
  
    { id: 2, name: "Cycling", caloriesBurned: 200 },
  
    { id: 3, name: "Swimming", caloriesBurned: 400 },
  
  ];

  const songs = [

  { id: 1, title: "Song A", duration: 180, rating: 4.2 },

  { id: 2, title: "Song B", duration: 210, rating: 3.8 },

  { id: 3, title: "Song C", duration: 150, rating: 4.5 },

];

const books = [

  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },

  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },

  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },

];

const songes = [

  { id: 1, title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },

  { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },

  { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },

];

const cities = [

  { id: 1, name: "New York", population: 8500000 },

  { id: 2, name: "Paris", population: 2200000 },

  { id: 3, name: "Tokyo", population: 3770000 },

];

const products = [

  { id: 1, name: "Laptop", price: 1200 },

  { id: 2, name: "Smartphone", price: 800 },

  { id: 3, name: "Headphones", price: 60 },

];

const students = [

  { id: 1, name: "Alice", age: 20, grades: { math: 90, science: 85, english: 92 } },

  { id: 2, name: "Bob", age: 22, grades: { math: 78, science: 80, english: 85 } },

  { id: 3, name: "Charlie", age: 21, grades: { math: 95, science: 88, english: 94 } },

];

const orders = [

  { id: 1, customer: "John Doe", totalAmount: 150, products: [{ id: 101, name: "Widget", quantity: 2 }, { id: 102, name: "Gadget", quantity: 1 }] },

  { id: 2, customer: "Alice Smith", totalAmount: 200, products: [{ id: 103, name: "Tool", quantity: 1 }, { id: 104, name: "Device", quantity: 3 }] },

  { id: 3, customer: "Bob Johnson", totalAmount: 100, products: [{ id: 105, name: "Accessory", quantity: 5 }] },

];

const employees = [

  { id: 1, name: "Jane Doe", position: "Software Engineer", department: { name: "Engineering", location: "Building A" } },

  { id: 2, name: "Sam Smith", position: "Marketing Manager", department: { name: "Marketing", location: "Building B" } },

  { id: 3, name: "Mike Johnson", position: "HR Specialist", department: { name: "Human Resources", location: "Building C" } },

];

const store = {

  name: "Tech Emporium",

  categories: [

    { id: 1, name: "Electronics", itemDetail: { id: 101, product: "Laptop", inStock: true } },

    { id: 2, name: "Accessories", itemDetail: { id: 201, product: "Headphones", inStock: true } },

    { id: 3, name: "Electronics", itemDetail: { id: 301, product: "Heater", inStock: false } },

  ]

};

  return (
    <div>
      <main>
       
        <Exercises exercises={exercises} />
        <hr />
        <Songs songs={songs} />
        <hr />
        <Books books={books} />
        <hr />
        <Songes songes={songes} />
        <hr />
        <Cities cities={cities} />
        <hr />
        <Products products={products} />
        <hr />
        <StudentDetails students={students} />
        <hr />
        <OrderDetails orders={orders} />
        <hr />
        <EmployeeDetails employees={employees} />
        <hr />
        <TotalInStock store={store} />
      </main>
    </div>
  );
}
