/**
 * 1. Create a React component called BookInformation to display the following details.

const book = {

    title: "1984",

    author: "George Orwell",

    genre: "Dystopian Fiction",

    year: 1949,

  };

2. Create a React component called BlogDetails to display the following details.

const blog = {

    title: "How to Start a Blog",

    author: "Jane Smith",

    date: "February 28, 2024",

    likes: 150,

  };

3. Create a React component called MovieProfile to display the following details.

const movieProfile = {

    title: "The Shawshank Redemption",

    director: "Frank Darabont",

    rating: 9.3,

  };

4. Create a React component called ProductDetails to display the following details.

const product = {

    name: "Smartphone",

    brand: "Samsung",

    price: 799.99,

  };

5. Create a React component called bookDetails to display the following details.

const book = {

  title: "The Hitchhiker's Guide to the Galaxy",

  author: {

    name: "Douglas Adams",

    nationality: "British"

  },

  publicationYear: 1979,

  genres: ["Science Fiction", "Comedy"]

};

Expected Output:
Book Information
Title: 1984

Author: George Orwell

Genre: Dystopian Fiction

Year: 1949

Blog Details
Title: How to Start a Blog

Author: Jane Smith

Date: February 28, 2024

Likes: 150

Movie Profile
Title: The Shawshank Redemption

Release Year:

Rating: 9.3

Product Details
Name: Smartphone

Brand: Samsung

Price: 799.99

Book Details
The Hitchhiker's Guide to the Galaxy

Author: Douglas Adams, British

Publication Year: 1979

Genres: Science Fiction, Comedy
 */

import './App.css'


const BookInformation =  () =>{

    const book = {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian Fiction",
        year: 1949,
      };

    return(
        <div>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Year: {book.year}</p>
        </div>
    )
}

const BlogDetails = () =>{

    const blog = {
        title: "How to Start a Blog",
        author: "Jane Smith",
        date: "February 28, 2024",
        likes: 150,
      };
      return(
        <div>
            <p>Title: {blog.title}</p>
            <p>Author: {blog.author}</p>
            <p>Date: {blog.date}</p>
            <p>Likes: {blog.likes}</p>
        </div>
      )

}

const MovieProfile = () => {
    const movieProfile = {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        rating: 9.3,
      };
    return(
        <div>
            <p>Title: {movieProfile.title}</p>
            <p>Release Year: {movieProfile.releaseYear}</p>
            <p>Rating: {movieProfile.rating}</p>
        </div>
    )
}

const ProductDetails = () => {
    const product = {
        name: "Smartphone",
        brand: "Samsung",
        price: 799.99,
      };
    return(
        <div>
            <p>Name: {product.name}</p>
            <p>Brand: {product.brand}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}

const BookDetails = () => {

    const book = {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: {
          name: "Douglas Adams",
          nationality: "British"
        },
        publicationYear: 1979,
        genres: ["Science Fiction", "Comedy"]
      };
    return(
        <div>
            <p><strong>{book.title}</strong></p>
            <p>Author: {book.author.name}, {book.author.nationality}</p>
            <p>Publication Year: {book.publicationYear}</p>
            <p>Genres: {book.genres.join(", ")}</p>
            
        </div>
    )  
}



export default function App(){
    return(
        <div>
            <h1>Book Information</h1>
            <BookInformation />

            <h1>Blog Details</h1>
            <BlogDetails />

            <h1>Movie Profile</h1>
            <MovieProfile />

            <h1>Product Details</h1>
            <ProductDetails />

            <h1>Book Details</h1>
            <BookDetails />

        </div>
    )
}