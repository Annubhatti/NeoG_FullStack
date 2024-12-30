import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Stays() {
  return (
    <>
    <Header />
    <main className="container py-4">
      <h1>Featured Stays</h1>
      <div>
        <div className="card mt-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://th.bing.com/th/id/R.56c6ed7647289ce5f53ece387b5772c2?rik=NE44GWKWwql4yg&riu=http%3a%2f%2fimages.ctfassets.net%2fr7p9m4b1iqbp%2f3vHVNUDzVg5KMdOoYX07Ap%2f3b28c87a3fe38e98581bffda2f6b413f%2fWashington-Index-Treeframe-Cabin-Exterior.jpg%3fw%3d1000&ehk=qaX02nESzbGwjZ0RHKcQPxxy7YRNZL3g7UNvBdNdxeA%3d&risl=&pid=ImgRaw&r=0"
                className="img-fluid rounded-start"
                alt="house 1"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Luxurious Taj Mahal View Aparment</h5>
                <p className="card-text">
                  Wake up to a breathtaking view of the Taj Mahal fromthis luxurious apartment. Explore the rich history and beauty of this iconic monument right from your window.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://img.money.com/2017/11/171110-treehouse-weaverville-exterior.jpg?quality=60"
                className="img-fluid rounded-start"
                alt="house 2"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cozy Retreat in the Mountains</h5>
                <p className="card-text">
                  Escape to nature with this cozy mountain retreat. Enjoy tranquility and stunning views while being surrounding by lush forests and fresh mountain air.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                  Last updated 10 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://s3.eu-central-1.amazonaws.com/assets.holidaypirates.group/2021_04/MTYxNzc5NTU2NTU3MQ.jpg"
                className="img-fluid rounded-start"
                alt="house 3"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Modren Loft in the City Center</h5>
                <p className="card-text">
                  Experience urban living at its finest with this modren loft. Conveniently located in the city center, it offers style, comfoort, and easy access to dining and entairnment options.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 20 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
    
    <Footer />
    </>
  );
}
