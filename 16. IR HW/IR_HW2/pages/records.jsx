import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Record() {
  return (
    <>
      <Header />
      <main className="container">
        <h2 className="display-3 py-4">Records</h2>

        <p className="fs-5 fw-light">
          Virat Kohli, born on November 5, 1998, in Delhi, india, is one of the
          world's leading cricketers. He is known for his aggressive batting and
          strong leadership as the captain of the indian cricket team.
        </p>
        <p className="fs-5 fw-light">
          Kohli has consistently ranked among the world's top batsman and has
          received uumerous awards and accolades for his remarkable cricketing
          skills.
        </p>
      </main>
      <Footer />
    </>
  );
}
