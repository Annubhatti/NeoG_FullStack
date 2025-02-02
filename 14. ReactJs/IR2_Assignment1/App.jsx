// 1. Given an array of objects representing books, write a React component to display the details of books with the genre "Science Fiction".

// const books = [

//   { id: 1, title: "Dune", genre: "Science Fiction" },

//   { id: 2, title: "Neuromancer", genre: "Science Fiction" },

//   { id: 3, title: "Foundation", genre: "Sci-fi" },

// ];



// 2. Create a React component to show the details of users with an "Admin" role from an array of user objects.

// const users = [

//   { id: 1, name: "Alice", role: "User" },

//   { id: 2, name: "Bob", role: "Admin" },

//   { id: 3, name: "Charlie", role: "User" },

//   { id: 4, name: "John", role: "Admin" },

// ];



// 3. Create a React component to display all information about products with a price above $100.

// const products = [

//   { id: 1, name: "Laptop", price: 1200, features: {color: "green", isWaterProof: false} },

//   { id: 2, name: "Smartphone", price: 800, features: {color: "blue", isWaterProof: true} },

//   { id: 3, name: "Headphones", price: 150, features: {color: "silver", isWaterProof: false} },

// ];



// 4. Create a React component to show the details of cities with a population over 10 lakh.

// const cities = [

//   { id: 1, name: "New York", population: 8500000 },

//   { id: 2, name: "Los Angeles", population: 539900 },

//   { id: 3, name: "Chicago", population: 2700000 },

// ];



// 5. Create a React component to display information about movies released after 2015.

// const movies = [

//   { id: 1, title: "Inception", releaseYear: 2010 },

//   { id: 2, title: "La La Land", releaseYear: 2016 },

//   { id: 3, title: "Interstellar", releaseYear: 2014 },

//   { id: 4, title: "Dune 2", releaseYear: 2024 },

// ];



// 6. Create a React component to show details of podcasts that are marked as "Featured".

// const podcasts = [

//   { id: 1, title: "Tech Talk", host: ["host 1"], featured: true },

//   { id: 2, title: "Business Insights", host: ["host 2"], featured: false },

//   { id: 3, title: "Science Hour", host: ["host 3", "host 4"], featured: true },

// ];



// 7. Create a React component to show the average duration of movies released in 2000 and above.

// const movies = [

//   { id: 1, title: "The Matrix", duration: 136, releaseYear: 1999 },

//   { id: 2, title: "Inception", duration: 148, releaseYear: 2010 },

//   { id: 3, title: "Avatar", duration: 162, releaseYear: 2009 },

// ];



// 8. Create a React component to display the total number of tasks completed.

// const tasks = [

//   { id: 1, description: "Complete project proposal", completed: true },

//   { id: 2, description: "Review client feedback", completed: false },

//   { id: 3, description: "Submit final report", completed: true },

// ];



// 9. Create a React component to display the total distance traveled by my vehicles.

// const vehicles = [

//   { id: 1, name: "Car", distance: 150 },

//   { id: 2, name: "Bicycle", distance: 10 },

//   { id: 3, name: "Motorcycle", distance: 75 },

// ];



// 10. Create a React component to display the total revenue generated by all sales transactions.

// const sales = [

//   { id: 1, product: "Widget A", price: 25, quantity: 10 },

//   { id: 2, product: "Gadget B", price: 50, quantity: 5 },

//   { id: 3, product: "Tool C", price: 30, quantity: 8 },

// ];

import "./App.css";
const Books = ({ books }) => {
  const filteredBook = books.filter(book => book.genre === 'Science Fiction');
  const bookListing = filteredBook.map(book => (
    <div key={book.id}>
      <h3>Title: {book.title}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  ));
  return (
    <div>
      <h2>Books Details</h2>
      {bookListing}
    </div>
  );
};

const Users = ({ users }) => {
  const filteredUsers = users.filter(user => user.role === 'Admin');
  const usersListing = filteredUsers.map(user => (
    <div key={user.id}>
      <h3>Name: {user.name}</h3>
      <p>Role: {user.role}</p>
    </div>
  ));
  return (
    <div>
      <h2>Admin Users</h2>
      {usersListing}
    </div>
  );
};

const ProductList = ({ products }) => {
  const filteredProducts = products.filter(product => product.price >= 100);
  const productListing = filteredProducts.map(product => (
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  ));
  return (
    <div>
      <h2>Products</h2>
      {productListing}
    </div>
  );
};

const Cities = ({ cities }) => {
  const filteredCities = cities.filter(city => city.population > 1000000);
  return (
    <div>
      <h2>Cities with Population Over 10 Lakh</h2>
      {filteredCities.map(city => (
        <div key={city.id}>
          <p>ID: {city.id}</p>
          <p>Name: {city.name}</p>
          <p>Population: {city.population}</p>
        </div>
      ))}
    </div>
  );
};

const Movies = ({ movies }) => {
  const filteredMovies = movies.filter(movie => movie.releaseYear > 2015);
  const movieListing = filteredMovies.map(movie => (
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  ));
  return (
    <div>
      <h2>Movies Released After 2015</h2>
      {movieListing}
    </div>
  );
};

const Podcasts = ({ podcasts }) => {
  const filteredPodcast = podcasts.filter(podcast => podcast.featured);
  const podcastListing = filteredPodcast.map(podcast => (
    <div key={podcast.id}>
      <h3>Title: {podcast.title}</h3>
      <p>Hosts: {podcast.host.join(', ')}</p>
    </div>
  ));
  return (
    <div>
      <h2>Podcasts</h2>
      {podcastListing}
    </div>
  );
};

const MoviesDuration = ({ moviies }) => {
  const filteredMovies = moviies.filter(movie => movie.releaseYear >= 2000);
  const totalDuration = filteredMovies.reduce(
    (total, movie) => total + movie.duration,
    0
  );
  const averageDuration =
    filteredMovies.length > 0
      ? (totalDuration / filteredMovies.length).toFixed(2)
      : 0;

  return (
    <div>
      <h2>The average duration is {averageDuration} minutes.</h2>
    </div>
  );
};

const Tasks = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div>
      <h2>Tasks Completed: {completedTasks}</h2>
    </div>
  );
};

const Vehicles = ({ vehicles }) => {
  const totalDistance = vehicles.reduce((acc , curr) => acc + curr.distance,0)

  return (
    <div>
      <h2>Tasks distance traveled by my vehicles: {totalDistance}</h2>
    </div>
  );
};

const Sales = ({ sales }) => {
  const totalRevenue = sales.reduce(
    (acc, sale) => acc + sale.price * sale.quantity,
    0
  );
  return (
    <div>
      <h2>Tasks Revenue: {totalRevenue}</h2>
    </div>
  );
}; 



export default function App() {
  const books = [
    { id: 1, title: 'Dune', genre: 'Science Fiction' },

    { id: 2, title: 'Neuromancer', genre: 'Science Fiction' },

    { id: 3, title: 'Foundation', genre: 'Sci-fi' },
  ];

  const users = [
    { id: 1, name: 'Alice', role: 'User' },

    { id: 2, name: 'Bob', role: 'Admin' },

    { id: 3, name: 'Charlie', role: 'User' },

    { id: 4, name: 'John', role: 'Admin' },
  ];

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      features: { color: 'green', isWaterProof: false },
    },

    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      features: { color: 'blue', isWaterProof: true },
    },

    {
      id: 3,
      name: 'Headphones',
      price: 150,
      features: { color: 'silver', isWaterProof: false },
    },
  ];

  const cities = [
    { id: 1, name: 'New York', population: 8500000 },

    { id: 2, name: 'Los Angeles', population: 539900 },

    { id: 3, name: 'Chicago', population: 2700000 },
  ];

  const movies = [
    { id: 1, title: 'Inception', releaseYear: 2010 },

    { id: 2, title: 'La La Land', releaseYear: 2016 },

    { id: 3, title: 'Interstellar', releaseYear: 2014 },

    { id: 4, title: 'Dune 2', releaseYear: 2024 },
  ];

  const podcasts = [
    { id: 1, title: 'Tech Talk', host: ['host 1'], featured: true },

    { id: 2, title: 'Business Insights', host: ['host 2'], featured: false },

    {
      id: 3,
      title: 'Science Hour',
      host: ['host 3', 'host 4'],
      featured: true,
    },
  ];

  const moviies = [
    { id: 1, title: 'The Matrix', duration: 136, releaseYear: 1999 },

    { id: 2, title: 'Inception', duration: 148, releaseYear: 2010 },

    { id: 3, title: 'Avatar', duration: 162, releaseYear: 2009 },
  ];

  const tasks = [
    { id: 1, description: 'Complete project proposal', completed: true },

    { id: 2, description: 'Review client feedback', completed: false },

    { id: 3, description: 'Submit final report', completed: true },
  ];

  const vehicles = [
    { id: 1, name: 'Car', distance: 150 },

    { id: 2, name: 'Bicycle', distance: 10 },

    { id: 3, name: 'Motorcycle', distance: 75 },
  ];

  const sales = [
    { id: 1, product: 'Widget A', price: 25, quantity: 10 },

    { id: 2, product: 'Gadget B', price: 50, quantity: 5 },

    { id: 3, product: 'Tool C', price: 30, quantity: 8 },
  ];

  return (
    <div>
      <main>
        <Books books={books} />
        <hr />
        <Users users={users} />
        <hr />
        <ProductList products={products} />
        <hr />
        <Cities cities={cities} />
        <hr />
        <Movies movies={movies} />
        <hr />
        <Podcasts podcasts={podcasts} />
        <hr />
        <MoviesDuration moviies={moviies} />
        <hr />
        <Tasks tasks={tasks} />
        <hr />
        <Vehicles vehicles={vehicles} />
        <hr />
        <Sales sales={sales} />
      </main>
    </div>
  );
}


