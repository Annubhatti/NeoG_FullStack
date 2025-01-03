import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <h2 className="display-3 py-4">Overview</h2>
        <img
          src="https://im.rediff.com/cricket/2024/nov/13kohli1.jpg?w=1400&h=900"
          alt="Virat Kohli"
          className="rounded img-fluid"
        />
        <p className="fs-5 fw-light mt-3">Virat Kohli, born on November 5, 1998, in Delhi, india, is one of the world's leading cricketers. He is known for his aggressive batting and strong leadership as the captain of the indian cricket team.</p>
        <p className="fs-5 fw-light">Kohli has consistently ranked among the world's top batsman and has received uumerous awards and accolades for his remarkable cricketing skills.</p>
    </main>
      <Footer />
    </>
  );
}
