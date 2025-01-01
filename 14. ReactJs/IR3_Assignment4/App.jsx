import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  
  return (
    <>
      <Header />
      <main className="container py-4 text-center">
        <img src="https://img.freepik.com/free-vector/orange-blue-background-list_23-2149020601.jpg"
         alt="todoing"
         className="img-fluid rounded text-aligned-center" />

         <h3 className="mt-3">Todos</h3>
         <p>Welcome to the Todo application!</p>
         <Link className="btn btn-primary" to="/todo">View Todos</Link>
        <div>
        </div>
      </main>
      <Footer />
    </>
  );
}
