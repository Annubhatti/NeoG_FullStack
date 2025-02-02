import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Specifications() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="my-5">
          <h2 className="display-3 fw-light my-3">Specifications</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Display:</strong>6-10-inch touchscreen, 1179*2556 pixels,
              460 ppi
            </li>
            <li className="list-group-item">
              <strong>Processor:</strong>Apple A16 Bionic (hexa-core)
            </li>
            <li className="list-group-item">
              <strong>RAM:</strong>8GB
            </li>
            <li className="list-group-item">
              <strong>Storage:</strong>128GB,256GB,512GB
            </li>
            <li className="list-group-item">
              <strong>Camera (Rear):</strong>48MP primary (f/1.9) + 12MP (f/2.4)
            </li>
            <li className="list-group-item">
              <strong>Camera (front):</strong>12MP (f/1.9)
            </li>
            <li className="list-group-item">
              <strong>OS:</strong>iOS 17
            </li>
            <li className="list-group-item">
              <strong>Battery:</strong>Not Specified
            </li>
          </ul>
          <p className="py-3">Price in India (as of 30th Octuber 2023): Rs. 79,900</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
