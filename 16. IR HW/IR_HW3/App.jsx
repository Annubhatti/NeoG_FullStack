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
          src="https://images.pexels.com/photos/18525573/pexels-photo-18525573/free-photo-of-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="iPhone 15"
          className="rounded img-fluid"
        />
        <p className="py-2">
          The iPhone 15 series, released by Apple in September 2023, brings
          notable upgrades in design, performance, and camera capabilities. Key
          models include the iPhone 15, iPhone 15 Plus, iPhone 15 Pro, and
          iPhone 15 Pro Max, each with distinct features to suit different user
          preferences.
        </p>
      </main>
      <Footer />
    </>
  );
}
