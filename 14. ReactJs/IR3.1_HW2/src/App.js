
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"


export default function App() {
  return (
    <main className="container py-4">
      
        <h1>Latest Listings</h1>
        <article>
          <img src="https://th.bing.com/th/id/R.55e84791a8b4580ae5be72d70be7c469?rik=QbvUxc4BN2kwog&riu=http%3a%2f%2ft.realgeeks.media%2fthumbnail%2fZuI8emYsxqm3cDCA_NEtha9wD1A%3d%2ffit-in%2f1100x0%2fu.realgeeks.media%2fcent21barbpatterson%2f_rgg%2flandscape_images%2fCottage.jpg&ehk=N1k%2fNhtZMrzm3Wv%2fFuKq6ay4b%2bz13cet4sO1YahWSH0%3d&risl=&pid=ImgRaw&r=0" alt="home 1" className="img-fluid rounded" />
          <h5 className="mt-3">Cozy Loft in the City Center</h5>

          <p>
            Entire loft . 2 guests . 1 bedroom . 1 bed . 1 bath
          </p>
          <p>Enjoy your stay in this stylish loft apartment loacated in the heart of the city. Close to restaurants, shops, and attractions, it's the perfect base for exploring the city.</p>
          <p>
            $120 per night
          </p>
        </article>
        <article>
        <img src="https://th.bing.com/th/id/OIP.wCOIZZ2QjtvMW5dgNxy1CgHaD2?rs=1&pid=ImgDetMain" alt="home 2" className="img-fluid rounded" />
          <h5 className="mt-3">Beachfront Villa with Stunning Views</h5>

          <p>
            IEntire villa . 6 guests . 3 bedroom . 3 bed . 2 bath
          </p>
          <p>Relax and unwind your stay in this stylish loft apartment loacated in the heart of the city. Close to restaurants, shops, and attractions, it's the perfect base for exploring the city.</p>
          <p>
            $300 per night
          </p>
        </article>
      
    </main>
  );
}
