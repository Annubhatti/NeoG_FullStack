import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div>
          <h2 className="display-3 py-4">Overview</h2>
          <img
            src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Taj Mahal"
            className="rounded img-fluid"
          />

          <p className="fs-5 fw-light mt-3">
            The Taj Mahal, located in Agra, India, is one of the most iconic
            landmarks in the world and a UNESCO World Heritage Site. Built by
            Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz
            Mahal, it is a symbol of eternal love and an outstanding example of
            Mughal architecture.
          </p>
          <p className="fs-5 fw-light">
            The complex includes the main mausoleum, a mosque, a guest house,
            gardens, and reflecting pools.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
