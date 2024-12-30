
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
    <Header />
    <main className="container py-4">
      
        <h1>Featured Restaurants</h1>
        <article>
          <img src="https://wallpaperaccess.com/full/3014609.jpg" alt="blog 1" className="img-fluid rounded" />
          <h5 className="mt-3">Taste of Italy</h5>

          <p>
            Italian | Rating: 4.5
          </p>
          <p>
            123 Main Street, Anytown, USA
          </p>
        </article>
        <article>
        <img src="https://wallpaperaccess.com/full/3692584.jpg" alt="blog 1" className="img-fluid rounded" />
          <h5 className="mt-3">Spice Village</h5>

          <p>
            Indian | Rating: 4.3
          </p>
          <p>
            456 Elm Street, Anytown, USA
          </p>
        </article>
      
    </main>
    <Footer />
    </>
  );
}
