import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

export default function App() {
  const posts = [
    {
      id: "1",
      username: "john_doe",
      imgUrl: "https://placehold.co/400x200?text=Hello+World",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      username: "jane_smith",
      imgUrl: "https://placehold.co/400x200?text=Smiling+Jane",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "3",
      username: "alice_wonder",
      imgUrl: "https://placehold.co/400x200?text=Alice+In+Wonder+Park",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];


  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Posts</h1>

        <div className="list-group">
          {posts.map((post) => (
            <div
              key={post.id}
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between align-items-start">
                <div>
                  <h5 className="mb-1">
                    <Link to={`/profile/${post.username}`}>{post.username}</Link>
                  </h5>
                  <img
                    src={post.imgUrl}
                    alt={`${post.username}'s post`}
                    className="img-fluid rounded mt-2"
                  />
                  <p className="mt-2">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
