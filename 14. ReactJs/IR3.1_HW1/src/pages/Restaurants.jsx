export default function Restaurants() {
  return (
    <main className="container py-4">
      <h1>Restaurants</h1>
      <div>
        <div className="card mt-3" style={{float: 'left'}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://th.bing.com/th/id/OIP.PMqWalG0o9orq9s5HezHpQHaFR?rs=1&pid=ImgDetMain"
                class="img-fluid rounded-start"
                alt="restaurant 1"
              />
            </div>
            <div class="col-md-8">
              <div className="card-body">
                <h5 class="card-title">Taste of India</h5>
                <p className="card-text">
                  Enjoy authentic Indian cuisine at Taste of India. Explore a
                  varity of delicious dishies from different regions of India.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Rating: 4.7 | Open Now
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3" style={{float: 'left'}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://th.bing.com/th/id/OIP.daz0e05KjkhljvefPzkV2wHaFj?rs=1&pid=ImgDetMain"
                class="img-fluid rounded-start"
                alt="restaurant 2"
              />
            </div>
            <div class="col-md-8">
              <div className="card-body">
                <h5 class="card-title">Pizza Paradise</h5>
                <p className="card-text">
                  Indulge in mouth-watering pizzas at Pizza Paradise. With a
                  varity of toppings and crusts, it's a pizza lover's dream.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Rating: 4.5 | Open Now
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
