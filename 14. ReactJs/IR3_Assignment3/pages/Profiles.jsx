import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Profiles(){

    const userData = {
        john_doe: {
          fullName: "John Doe",
          bio: "Software Developer | Tech Enthusiast",
          imageUrl: "https://via.placeholder.com/250",
          followers: 1000,
          following: 500,
          posts: 50,
        },
        jane_smith: {
          fullName: "Jane Smith",
          bio: "Graphic Designer | Nature Lover",
          imageUrl: "https://via.placeholder.com/250",
          followers: 800,
          following: 300,
          posts: 40,
        },
        alice_wonder: {
          fullName: "Alice Wonder",
          bio: "Travel Blogger | Foodie",
          imageUrl: "https://via.placeholder.com/150",
          followers: 1200,
          following: 600,
          posts: 60,
        },
      };


    return(
        <div>
            <Header />
            <h1>Profiles of Employees</h1>
            <Footer />
        </div>
    )
}