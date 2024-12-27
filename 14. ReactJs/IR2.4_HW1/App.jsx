// 1. Given an array of objects, write a React component to find and display all the movie details of "Movie 2".

// const movies = [

//     { title: "Movie 1", director: "Director 1", genre: "Action" },

//     { title: "Movie 2", director: "Director 2", genre: "Comedy" },

//     { title: "Movie 3", director: "Director 3", genre: "Drama" },

//   ];



// 2. Given an array of objects, write a React component to find and display all the details of "Cafe 2".

//  const cafes = [

//     { name: "Cafe 1", location: "Location 1", rating: 4.5 },

//     { name: "Cafe 2", location: "Location 2", rating: 4.2 },

//     { name: "Cafe 3", location: "Location 3", rating: 4.8 },

//   ];



// 3. Given an array of objects, write a React component to find and display all the details of "Podcast 3".

// const podcasts = [

//     { title: "Podcast 1", host: "Host 1", listeners: 5000 },

//     { title: "Podcast 2", host: "Host 2", listeners: 3000 },

//     { title: "Podcast 3", host: "Host 3", listeners: 7000 },

//   ];



// 4. Given an array of objects, write a React component to find and display all the details of "Book 1".

// const books = [

//     { title: "Book 1", author: "Author 1", pages: 300 },

//     { title: "Book 2", author: "Author 2", pages: 250 },

//     { title: "Book 3", author: "Author 3", pages: 400 },

//   ];



// 5. Given an array of objects, write a React component to find and display all the details of "Article 2".

//   const articles = [

//     { title: "Article 1", author: "Author 1", category: "Technology" },

//     { title: "Article 2", author: "Author 2", category: "Food" },

//     { title: "Article 3", author: "Author 3", category: "Fashion" },

//   ];



// 6. Given an array of objects, write a React component to find and display all the blog details of category "Food".

// const blogPosts = [

//     { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },

//     { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },

//     { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }

//   ];

// Expected Output:
// Movie Details
// Title: Movie 2

// Director: Director 2

// Genre: Comedy

// Cafes Data
// Name: Cafe 2

// Location: Location 2

// Rating: 4.2

// Podcast Details
// Title: Podcast 3

// Host: Host 3

// Listeners: 7000

// Book Data
// Title: Book 1

// Author: Author 1

// Pages: 300

// Article Details
// Title: Article 2

// Author: Author 2

// Category: Food

// Blog Posts on "Food"
// Id: 2

// Title: Blog Post 2

// Content: Content 2

// Category: Food

import "./App.css";



const Movies = ({ movies }) => {
  const movieDetail = movies.find(movie => movie.title === "Movie 2");

  return (
    <div>
      <h2>Movie Details</h2>
      <p>Title: {movieDetail.title}</p>
      <p>Director: {movieDetail.director}</p>
      <p>Genre: {movieDetail.genre}</p>
    </div>
  );
};

const Cafes = ({ cafes }) => {
  const cafeData = cafes.find(cafe => cafe.name === "Cafe 2");
  
  return (
    <div>
      <h2>Cafes Data</h2>
      <p>Name: {cafeData.name}</p>
      <p>Location: {cafeData.location}</p>
      <p>Rating: {cafeData.rating}</p>
    </div>
  );
};

const Podcasts = ({ podcasts }) => {
  const podcastDetail = podcasts.find(podcast => podcast.title === "Podcast 3");

  return (
    <div>
      <h2>Podcast Details</h2>
      <p>Title: {podcastDetail.title}</p>
      <p>Host: {podcastDetail.host}</p>
      <p>Listeners: {podcastDetail.listeners}</p>
    </div>
  );
};

const Books = ({ books }) => {
  const booksData = books.find(book => book.title === "Book 1")
  
  return (
    <div>
      <h2>Book Data</h2>
      <p>Title: {booksData.title}</p>
      <p>Author: {booksData.author}</p>
      <p>Pages: {booksData.pages}</p>
    </div>
  );
};

const ArticleDetails = ({ articles }) => {
  const articleDetails = articles.find(article => article.title === "Article 2")
    
  return (
    <div>
      <h2>Article Details</h2>
      <p>Title: {articleDetails.title}</p>
      <p>Author: {articleDetails.author}</p>
      <p>Category: {articleDetails.category}</p>
    </div>
  );
};

const FoodBlog = ({ blogPosts }) => {
  const blogDetail = blogPosts.find(blog => blog.category === "Food")
    
  return (
    <div>
      <h2>Blog Posts on "Food"</h2>
      <p>Id: {blogDetail.id}</p>
      <p>Title: {blogDetail.title}</p>
      <p>Content: {blogDetail.content}</p>
      <p>Category: {blogDetail.category}</p>
    </div>
  );
};

export default function App() {
  

  const movies = [

    { title: "Movie 1", director: "Director 1", genre: "Action" },

    { title: "Movie 2", director: "Director 2", genre: "Comedy" },

    { title: "Movie 3", director: "Director 3", genre: "Drama" },

  ];

  const cafes = [

    { name: "Cafe 1", location: "Location 1", rating: 4.5 },

    { name: "Cafe 2", location: "Location 2", rating: 4.2 },

    { name: "Cafe 3", location: "Location 3", rating: 4.8 },

  ];

  const podcasts = [

    { title: "Podcast 1", host: "Host 1", listeners: 5000 },

    { title: "Podcast 2", host: "Host 2", listeners: 3000 },

    { title: "Podcast 3", host: "Host 3", listeners: 7000 },

  ];

  const books = [

    { title: "Book 1", author: "Author 1", pages: 300 },

    { title: "Book 2", author: "Author 2", pages: 250 },

    { title: "Book 3", author: "Author 3", pages: 400 },

  ];

  const articles = [

    { title: "Article 1", author: "Author 1", category: "Technology" },

    { title: "Article 2", author: "Author 2", category: "Food" },

    { title: "Article 3", author: "Author 3", category: "Fashion" },

  ];

  const blogPosts = [

    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },

    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },

    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }

  ];



  return (
    <div>
      <main>
       
        <Movies movies={movies} title="Movie 2" />
        <hr />
        <Cafes cafes={cafes} name="Cafe 2" />
        <hr />
        <Podcasts podcasts={podcasts} title= "Podcast 3" />
        <hr />
        <Books books={books} title="Book 1" />
        <hr />
        <ArticleDetails articles={articles} title ="Article 2" />
        <hr />
        <FoodBlog blogPosts={blogPosts} category="Food" />
      </main>
    </div>
  );
}


