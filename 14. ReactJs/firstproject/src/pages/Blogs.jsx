import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <>
    <Header />
    <main className="container py-4">
      <h1>Blogs</h1>
      <div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5>Blog 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5>Blog 2</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mt-3">
                <div className="card-body">
                  <h5>Blog 4</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
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
