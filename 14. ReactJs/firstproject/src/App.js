import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
    <Header />
    <main className="container py-4">
      
        <h1>Latest Blogs</h1>
        <article>
          <h2>Blog 1</h2>
          <img src="https://via.placeholder.com/500x200" alt="blog 1" className="img-fluid rounded" />
          <p>Posted on February 22, 2024 by John Doe</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article>
          <h2>Blog 2</h2>
          <img src="https://via.placeholder.com/500x200" alt="blog 2" className="img-fluid rounded" />
          <p>Posted on February 18, 2024 by Jane Smith</p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </article>
      
    </main>
    <Footer />
    </>
  );
}
