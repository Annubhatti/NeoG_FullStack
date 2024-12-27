// 1. Create a React Component ProductPage, which takes some information about iPhone 15 Pro as props and display them as shown below. It also takes a prop called inStock. If the phone is in stock show a message "In Stock" else show the message "Currently out of stock".
//Expected Output:

// Product Page
// iPhone 15 Pro
// iphone
// Price:$499.99

// Color:Midnight Green

// Description:The latest flagship smartphone from Apple with cutting-edge feature and stunning design

// In Stock

// © 2024 Apple Inc.

import './App.css'

const Header = () => {
  return (
    <header>
      <h1>Product Page</h1>
    </header>
  )
}

const ProductPage = ({phoneprop}) => {
  
  return (
    <div>
      <h2>iPhone 15 Pro</h2>
      <img src={phoneprop.img} alt='iphone' />
      <p><strong>Price:</strong>{phoneprop.price}</p>
      <p><strong>Color:</strong>{phoneprop.color}</p>
      <p><strong>Description:</strong>{phoneprop.description}</p>
      <p><strong>{phoneprop.inStock ? "In Stock" : "Currently out of stock"}</strong></p>
    
    </div>
  )
    
}

const Footer = () =>{
  return(
      <footer>
          <p>&copy; 2024 Apple Inc.</p>
      </footer>
  )
}

export default function App(){

  const phone = {
    price: "$499.99",
    img:"https://via.placeholder.com/150x150",
    src: "iPhone 15 Pro",
    color: "Midnight Green",
    description: "The latest flagship smartphone from Apple with cutting-edge feature and stunning design",
    inStock : true
  }
    return(
      <div>
            <Header />
        <main>
            <ProductPage phoneprop={phone}/>
        </main>
            <Footer />
        </div>
    )
}