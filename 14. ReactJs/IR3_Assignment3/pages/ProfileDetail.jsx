import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export async function loader({ params }) {
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

  if (userData[params.profilename]) {
    return userData[params.profilename];
  }

  // Return null if the profile is not found
  return null;
}

export default function ProfileDetails() {
  const selectedData = useLoaderData();

  if (!selectedData) {
    return (
      <>
        <Header />
        <main className="container pt-3">
          <h1>User not found</h1>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container pt-3">
        <div className="row align-items-start">
          <div className="col-md-4">
            {/* Profile Image */}
            <div className="col-auto">
              <img
                src={selectedData.imageUrl}
                className="img-fluid"
                alt={`Profile of ${selectedData.fullName}`}
              />
            </div>
          </div>
          {/* Profile Details */}
          <div className="col-md-8">
            <h5 className="fw-bold">{selectedData.fullName}</h5>
            <p className="text-muted">{`@${(selectedData.fullName).replace(" ","_")}`}</p>
            <p>{selectedData.bio}</p>
            <p>Followers: {selectedData.followers}</p>
            <p>Following: {selectedData.following}</p>
            <p>Posts: {selectedData.posts}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}