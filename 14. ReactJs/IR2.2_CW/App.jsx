// filter product listing

// how to list some elements on the dom in reactjs

import './App.css'

const ProductList = ({products}) => {
    const filteredProducts = products.filter(product => product.price >= 20 && product.price <=50)
  const productListing = filteredProducts.map(product => (
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  ))
  return (
    <div>
      <h2>Producta</h2>
      {productListing}
    </div>
  )
    
}

const Restaurants = ({restaurants}) =>{
    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.cuisine === "Italian"
    )
  const restaurantListing = filteredRestaurants.map(restaurant => (
    <div key={restaurant.id}>
      <h3>Name: {restaurant.name}</h3>
      <p>cuisine: {restaurant.cuisine}</p>
    </div>
  ))
  return(
    <div>
    <h2>Restaurants</h2>
    {restaurantListing}
  </div>
  )
}

const Videos = ({videos}) =>{
    const filteredVideos = videos.filter(video =>
        video.views > 1000
    )
  const videoListing = videos.map(video => (
    <div key={video.id}>
      <h3>Title: {video.title}</h3>
      <p>Views: {video.views}</p>
    </div>
  ))
  return(
    <div>
    <h2>Videos</h2>
    {videoListing}
  </div>
  )
}

export default function App(){

  const products = [
    {id: 1, name: "Product 1", price: 19.99},
    {id: 2, name: "Product 2", price: 19.99},
    {id: 3, name: "Product 3", price: 19.99},
    
  ];
 
  const restaurants = [
    {id: 1, name: "Restaurant 1", cuisine: "Italian"},
    {id: 2, name: "Restaurant 2", cuisine: "Mexican"},
    {id: 3, name: "Restaurant 3", cuisine: "Chinese"},
    
  ];

  const videos = [
    {id: 1, title: "Video 1", views: 1000},
    {id: 2, title: "Video 2", views: 2000},
    {id: 3, title: "Video 3", views: 3000},
    
  ];
    return(
      <div>
        <main>
            <ProductList products={products} />
            <hr />
            <Restaurants restaurants={restaurants} />
            <hr />
            <Videos videos={videos} />
        </main>
        </div>
    )
}