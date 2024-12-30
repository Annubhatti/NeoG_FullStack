import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const restaurants = [
    {
      id: 1,
      title: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 Main Street, Cityville",
      rating: "4.5",
      description: "Experience authentic Italian cuisine in a cozy atmosphere.",
      menu: [
        { name: "Spaghetti Carbonara", price: "$15" },
        { name: "Margherita Pizza", price: "$12" },
        { name: "Tiramisu", price: "$8" },
      ],
    },
    {
      id: 2,
      title: "Spice Junction",
      cuisine: "Indian",
      location: "456 Elm Street, Townville",
      rating: "4.2",
      description: "Savor the flavor of India with our traditional dishes.",
      menu: [
        { name: "Chicken Tikka Masala", price: "$15" },
        { name: "Vegetable Biryani", price: "$12" },
        { name: "Gulab Jamun", price: "$6" },
      ],
    },
  ];

  const restaurantId = parseInt(params.restaurantId);
  const selectedRestaurant = restaurants.find((res) => res.id === restaurantId);

  return selectedRestaurant;
}

export default function RestaurantsDetails() {
  const selectedRestaurant = useLoaderData();

  if (!selectedRestaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{selectedRestaurant.title}</h1>
        <p>Cuisine: {selectedRestaurant.cuisine}</p>
        <p>Location: {selectedRestaurant.location}</p>
        <p>Rating: {selectedRestaurant.rating}</p>
        <p>{selectedRestaurant.description}</p>
        <hr />
        <h2 className="py-2">Menu</h2>
        <div className="row">
          {selectedRestaurant.menu.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
