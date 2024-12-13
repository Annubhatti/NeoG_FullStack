/**
 * 1. Create a React component called WelcomeMessage to display the message "Welcome, Emily!". Pass the user name, Emily as props.

2. Create a React component called BookDetails to display the following details. Pass the book data object as props.

const bookData = {

    title: "To Kill a Mockingbird",

    author: "Harper Lee",

    genre: "Classic",

  };

3. Create a React component called ArticleInformation to display the following details. Pass the article data object as props.

const articleData = {

    title: "The Power of Habit",

    author: "Charles Duhigg",

    publishedDate: "March 1, 2024",

  };

4. Create a React component called ProductDetails to display the following details. Pass the product data object as props.

const productData = {

    name: "Smartphone",

    brand: "Samsung",

    price: 799.99,

  };

5. Create a React component called EventDetails to display the following details. Pass the event data object as props.

const eventData = {

    title: "Tech Conference 2024",

    location: "San Francisco",

    date: "April 15, 2024",

  };

6. Create a React component called UserProfile to display the name and avatar image. Pass the name and avatar URL as props.

Expected Output:
Welcome,Emily!
Book Details
Title: To Kill a Mockingbird

Author: Harper Lee

Genre: Classic

Article Information
Title: The Power of Habit

Author: Charles Duhigg

Published Date: March 1, 2024

Product Details
Name: Smartphone

Brand: Samsung

Price: 799.99

Event Details
Title: Tech Conference 2024

Location: San Francisco

Date: April 15, 2024

User Profile
Name: Chris


 */

import './App.css'


const WelcomeMessage =  (props) =>{

    return(
        <div>
            <h1>Welcome,{props.name}!</h1>
        </div>
    )
}

const BookDetails = (props) =>{
      return(
        <div>
            <h1>Book Details</h1>
            <p>Title: {props.title}</p>
            <p>Author: {props.author}</p>
            <p>Genre: {props.genre}</p>
        </div>
      )

}

const ArticleInformation = (props) => {

    return(
        <div>
            <h1>Article Information</h1>
            <p>Title: {props.title}</p>
            <p>Author: {props.author}</p>
            <p>Published Date: {props.publishedDate}</p>
        </div>
    )
}

const ProductDetails = (props) => {

    return(
        <div>
            <h1>Product Details</h1>
            <p>Name: {props.name}</p>
            <p>Brand: {props.brand}</p>
            <p>Price: {props.price}</p>
        </div>
    )  
}

const EventDetails = (props) => {

    return(
        <div>
            <h1>Event Details</h1>
            <p>Title: {props.title}</p>
            <p>Location: {props.location}</p>
            <p>Date: {props.date}</p>
        </div>
    )
}

const UserProfile = (props) => {

    return(
        <div>
            <h1>User Profile</h1>
            <p>Name: {props.name}</p>
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default function App(){
    return(
        <div>
             
             <WelcomeMessage name="Emily" />
            <BookDetails title ="To Kill a Mockingbird" author ="Harper Lee" genre = "Classic" />
            <ArticleInformation title= "The Power of Habit" author= "Charles Duhigg" publishedDate= "March 1, 2024" />
            <ProductDetails name= "Smartphone" brand= "Samsung" price= {799.99} />
            <EventDetails title= "Tech Conference 2024" location= "San Francisco" date= "April 15, 2024" />
            <UserProfile name="Chris" img="https://via.placeholder.com/150" alt ="placeholder" />
        </div>
    )
}