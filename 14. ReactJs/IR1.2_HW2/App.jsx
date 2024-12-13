/**
 * 1. Create a React component called CarDetails to display the following details.

const car = {

    make: "Tesla",

    model: "Model S",

    year: 2022,

    color: "Black",

  };

2. Create a React component called MusicProfile to display the following details.

const artist = {

    name: "Beyoncé",

    genre: "R&B",

    albums: 8,

    awards: ["Grammy Award", "MTV Video Music Award"],

  };

3. Create a React component called RecipeInformation to display the following details.

const recipe = {

    name: "Spaghetti Bolognese",

    chef: {

      name: "Jamie Oliver",

      nationality: "British"

    },

    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Herbs"],

    cookingTime: 45

  };

4. Create a React component called MusicAlbum to display the following details.

const album = {

    title: "Abbey Road",

    artist: {

      name: "The Beatles",

      nationality: "British"

    },

    releaseYear: 1969,

    genres: ["Rock", "Pop"]

  };

5. Create a React component called LaptopDetails to display the following details.

const laptop = {

    brand: "Apple",

    model: "MacBook Pro",

    screenSize: "13 inches",

    price: 1299.99,

    features: ["A15 Bionic chip", "Dual-camera system", "5G capable"]

  };



Expected Output:
Car Details
Make: Tesla

Model: Model S

Year: 2022

Color: Black

Music Profile
Name: Beyoncé

Genre: R&B

Album: 8

Awards: Grammy Award, MTV Video Music Award

Recipe Information
Spaghetti Bolognese

Chef: Jamie Oliver, British

Ingredients: Spaghetti, Ground beef, Tomato sauce, Onion, Garlic, Herbs

Cooking Time: 45

Music Album
Title: Abbey Road

Artist: The Beatles, British

Release Year: 1969

Genre: Rock, Pop

Laptop Details
Brand: Apple

Model: MacBook Pro

Screen Size: 13 inches

Price: $1299.99

Features: A15 Bionic chip, Dual-camera system, 5G capable
 */
import './App.css'


const CarDetails =  () =>{

    const car = {
        make: "Tesla",
        model: "Model S",
        year: 2022,
        color: "Black",
      };

    return(
        <div>
            <div>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Color: {car.color}</p>
        </div>
        </div>
    )
}

const MusicProfile = () =>{

    const artist = {
        name: "Beyoncé",
        genre: "R&B",
        albums: 8,
        awards: ["Grammy Award", "MTV Video Music Award"],
      };
      return(
        <div>
            <p>Name: {artist.name}</p>
            <p>Genre: {artist.genre}</p>
            <p>Album: {artist.albums}</p>
            <p>Awards: {artist.awards.join(", ")}</p>
        </div>
      )

}

const RecipeInformation = () => {

    const recipe = {
        name: "Spaghetti Bolognese",
        chef: {
          name: "Jamie Oliver",
          nationality: "British"
        },
        ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Herbs"],
        cookingTime: 45
      };
    return(
        <div>
            <p><strong>{recipe.name}</strong></p>
            <p>Chef: {recipe.chef.name}, {recipe.chef.nationality}</p>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
            <p>Cooking Time: {recipe.cookingTime}</p>
        </div>
    )
}



const MusicAlbum = () => {

    const album = {
        title: "Abbey Road",
        artist: {
          name: "The Beatles",
          nationality: "British"
        },
        releaseYear: 1969,
        genres: ["Rock", "Pop"]
      };
    return(
        <div>
            <p>Title: {album.title}</p>
            <p>Artist: {album.artist.name}, {album.artist.nationality}</p>
            <p>Release Year: {album.releaseYear}</p>
            <p>Genre: {album.genres.join(", ")}</p>
            
        </div>
    )  
}

const LaptopDetails = () => {

    const laptop = {
        brand: "Apple",
        model: "MacBook Pro",
        screenSize: "13 inches",
        price: 1299.99,
        features: ["A15 Bionic chip", "Dual-camera system", "5G capable"]
      };

    return(
        <div>
            <p>Brand: {laptop.brand}</p>
            <p>Model: {laptop.model}</p>
            <p>Screen Size: {laptop.screenSize}</p>
            <p>Price: ${laptop.price}</p>
            <p>Features: {laptop.features.join(", ")}</p>
        </div>
    )
}

export default function App(){
    return(
        <div>
             <h1>Car Details</h1>
             <CarDetails />

            <h1>Music Profile</h1>
            <MusicProfile />

            <h1>Recipe Information</h1>
            <RecipeInformation />

             <h1>Music Album</h1>
            <MusicAlbum />

            <h1>Laptop Details</h1>
            <LaptopDetails />

        </div>
    )
}