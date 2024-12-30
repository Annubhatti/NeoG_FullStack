import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const postId = useParams();

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

  const postData = posts.find((post) => post.id === postId.profileId);

  return (
    <div>
        <Header />
      <main className="container py-4">
        <h1>{postData.username}</h1>
        <p className="pt-3">{postData.content}</p>
      </main>
      <Footer />
    </div>
  );
}
