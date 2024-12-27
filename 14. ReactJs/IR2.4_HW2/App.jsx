// 1. Given an array of objects, write a React component to find and display all the details of "Car 2". Pass the data as props.

// const cars = [

//     { model: "Car 1", make: "Make 1", year: 2022 },

//     { model: "Car 2", make: "Make 2", year: 2021 },

//     { model: "Car 3", make: "Make 3", year: 2023 },

//   ];



// 2. Given an array of objects, write a React component to find and display all the details of gym in "Location 2". Pass the data as props.

// const gyms = [

//     { name: "Gym 1", location: "Location 1", rating: 4.7 },

//     { name: "Gym 2", location: "Location 2", rating: 4.2 },

//     { name: "Gym 3", location: "Location 3", rating: 4.5 },

//   ];



// 3. Given an array of objects, write a React component to find and display all the details of "Travel 3" destination. Pass the data as props.

// const travels = [

//     {

//       destination: "Travel 1",

//       duration: "5 days",

//       activities: ["Hiking", "Sightseeing"],

//     },

//     {

//       destination: "Travel 2",

//       duration: "7 days",

//       activities: ["Beach", "Shopping"],

//     },

//     {

//       destination: "Travel 3",

//       duration: "3 days",

//       activities: ["Cultural Tours", "Photography"],

//     },

//   ];



// 4. Given an array of objects, write a React component to find and display all the details of laptop with "Apple M1" processor. Pass the data as props.

// const laptops = [

//     { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },

//     { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },

//     { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" },

//   ];



// 5. Given an array of objects, write a React component to find and display all the details of "Recipe 2". Pass the data as props.

//   const recipes = [

//     {

//       dish: "Recipe 1",

//       cuisine: "Italian",

//       ingredients: ["Tomatoes", "Pasta", "Cheese"],

//     },

//     {

//       dish: "Recipe 2",

//       cuisine: "Mexican",

//       ingredients: ["Beans", "Rice", "Avocado"],

//     },

//     {

//       dish: "Recipe 3",

//       cuisine: "Indian",

//       ingredients: ["Curry", "Rice", "Naan"],

//     },

//   ];



// 6. Given an array of objects, write a React component to find and display all the blog details of "Blog Post 3". Pass the data as props.

// const blogPosts = [

//     { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },

//     { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },

//     { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Fashion' }

//   ];

// Expected Output:
// Car Details
// Model: Car 2

// Make: Make 2

// Year: 2021

// Gym Data
// Name: Gym 2

// Location: Location 2

// Rating: 4.2

// Travel Details
// Destination: Travel 3

// Duration: 3 days

// Activities: Cultural ToursPhotography

// Laptop Data
// Brand: Laptop 3

// Processor: Apple M1

// RAM: 12GB

// Recipes Details
// Dish: Recipe 2

// Cuisine: Mexican

// Ingredients: BeansRiceAvocado

// Blog Data
// Id: 3

// Title: Blog Post 3

// Content: Content 3

// Category: Technology


import "./App.css";



const Cars = ({ cars }) => {
  const carDetail = cars.find(car => car.model === "Car 2");

  return (
    <div>
      <h2>Car Details</h2>
      <p>Model: {carDetail.model}</p>
      <p>Make: {carDetail.make}</p>
      <p>Year: {carDetail.year}</p>
    </div>
  );
};

const Gyms = ({ gyms }) => {
  const gymData = gyms.find(gym => gym.location === "Location 2");
  
  return (
    <div>
      <h2>Gym Data</h2>
      <p>Name: {gymData.name}</p>
      <p>Location: {gymData.location}</p>
      <p>Rating: {gymData.rating}</p>
    </div>
  );
};

const Travels = ({ travels }) => {
  const travelDetail = travels.find(travel => travel.destination === "Travel 3");

  return (
    <div>
      <h2>Travel Details</h2>
      <p>Destination: {travelDetail.destination}</p>
      <p>Duration: {travelDetail.duration}</p>
      <p>Activities: {travelDetail.activities}</p>
    </div>
  );
};

const Laptops = ({ laptops }) => {
  const laptopsData = laptops.find(laptop => laptop.processor === "Apple M1")
  
  return (
    <div>
      <h2>Laptop Data</h2>
      <p>Brand: {laptopsData.brand}</p>
      <p>Processor: {laptopsData.processor}</p>
      <p>RAM: {laptopsData.ram}</p>
    </div>
  );
};

const Recipes = ({ recipes }) => {
  const recipeDetails = recipes.find(recipe => recipe.dish === "Recipe 2")
    
  return (
    <div>
      <h2>Recipes Details</h2>
      <p>Dish: {recipeDetails.dish}</p>
      <p>Cuisine: {recipeDetails.cuisine}</p>
      <p>Ingredients: {recipeDetails.ingredients}</p>
    </div>
  );
};

const FoodBlog = ({ blogPosts }) => {
  const blogData = blogPosts.find(blog => blog.title === "Blog Post 3")
    
  return (
    <div>
      <h2>Blog Data</h2>
      <p>Id: {blogData.id}</p>
      <p>Title: {blogData.title}</p>
      <p>Content: {blogData.content}</p>
      <p>Category: {blogData.category}</p>
    </div>
  );
};

export default function App() {
  

  const cars = [

    { model: "Car 1", make: "Make 1", year: 2022 },

    { model: "Car 2", make: "Make 2", year: 2021 },

    { model: "Car 3", make: "Make 3", year: 2023 },

  ];

  const gyms = [

    { name: "Gym 1", location: "Location 1", rating: 4.7 },

    { name: "Gym 2", location: "Location 2", rating: 4.2 },

    { name: "Gym 3", location: "Location 3", rating: 4.5 },

  ];

  const travels = [

    {

      destination: "Travel 1",

      duration: "5 days",

      activities: ["Hiking", "Sightseeing"],

    },

    {

      destination: "Travel 2",

      duration: "7 days",

      activities: ["Beach", "Shopping"],

    },

    {

      destination: "Travel 3",

      duration: "3 days",

      activities: ["Cultural Tours", "Photography"],

    },

  ];



  const laptops = [

    { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },

    { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },

    { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" },

  ];

   const recipes = [

    {

      dish: "Recipe 1",

      cuisine: "Italian",

      ingredients: ["Tomatoes", "Pasta", "Cheese"],

    },

    {

      dish: "Recipe 2",

      cuisine: "Mexican",

      ingredients: ["Beans", "Rice", "Avocado"],

    },

    {

      dish: "Recipe 3",

      cuisine: "Indian",

      ingredients: ["Curry", "Rice", "Naan"],

    },

  ];



  const blogPosts = [

    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },

    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },

    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }

  ];



  return (
    <div>
      <main>
       
        <Cars cars={cars} model="Car 2" />
        <hr />
        <Gyms gyms={gyms} location= "Location 2" />
        <hr />
        <Travels travels={travels} destination= "Travel 3" />
        <hr />
        <Laptops laptops={laptops} processor= "Apple M1" />
        <hr />
        <Recipes recipes={recipes}   dish= "Recipe 2" />
        <hr />
        <FoodBlog blogPosts={blogPosts} title= 'Blog Post 3' />
      </main>
    </div>
  );
}
