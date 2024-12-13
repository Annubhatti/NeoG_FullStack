/*
1. Create a React component called WelcomeBanner to display the message "Welcome to My Recipe App!". Pass the app name, My Recipe as props.

2. Create a React component called RecipeDetails to display the following details. Pass the recipe data object as props.

const recipeData = {

    title: "Chocolate Cake",

    author: "Baker Betty",

    rating: 4.7,

  };

3. Create a React component called MovieInformation to display the following details. Pass the movie data object as props.

const movieData = {

    title: "The Godfather",

    director: "Francis Ford Coppola",

    releaseDate: "March 24, 1972",

  };

4. Create a React component called ProductFeatures to display the following details. Pass the product data object as props.

const productData = {

    name: "Smartwatch",

    color: "Black",

    size: "Medium",

  };

5. Create a React component called UserProfileCard to display the name, email and role of user. Pass the name, email and role as props.

Expected Output:
Welcome to My Recipe App!
Recipe Details
Title: Chocolate Cake

Author: Baker Betty

Rating: 4.7

Movie Information
Title: The Godfather

Director: Francis Ford Coppola

Release Date: March 24, 1972

Product Features
Name: Smartwatch

Color: Black

Size: Medium

User Profile
Name: Alice

Email: alice@example.com

Role: Admin
*/
import './App.css'


const WelcomeBanner =  (props) =>{

    return(
        <div>
            <h1>Welcome to {props.name} App!</h1>
        </div>
    )
}

const RecipeDetails = (props) =>{
      return(
        <div>
            <h1>Recipe Details</h1>
            <p>Title: {props.title}</p>
            <p>Author: {props.author}</p>
            <p>Rating: {props.rating}</p>
        </div>
      )

}

const MovieInformation = (props) => {

    return(
        <div>
            <h1>Movie Information</h1>
            <p>Title: {props.title}</p>
            <p>Director: {props.director}</p>
            <p>Release Date: {props.releaseDate}</p>
        </div>
    )  
}

const ProductFeatures = (props) => {

    return(
        <div>
            <h1>Product Features</h1>
            <p>Name: {props.name}</p>
            <p>Color: {props.color}</p>
            <p>Size: {props.size}</p>
        </div>
    )
}

const UserProfileCard = (props) => {

    return(
        <div>
            <h1>User Profile</h1>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Role: {props.role}</p>
        </div>
    )
}

export default function App(){
    return(
        <div>
             
             <WelcomeBanner name="My Recipe" />
            <RecipeDetails title ="Chocolate Cake" author ="Baker Betty" rating = {4.7} />
            <MovieInformation title= "The Godfather" director= "Francis Ford Coppola" releaseDate= "March 24, 1972" />
            <ProductFeatures name= "Smartwatch" color= "Black" size= "Medium" />
            <UserProfileCard name="Alice" email="alice@example.com" role ="Admin" />
        </div>
    )
}