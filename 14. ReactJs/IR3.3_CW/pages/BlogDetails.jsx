import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

    // to get the param useParamsHooks -> hooks are functions it is as encapsulation
    // where u don't have to deal with the fun code and everything threy write the fun code and giving u just as a hook so that u can dirly plugin into ur code 
    // 


    const blogId = useParams(); // return object of key value pair

  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      datePosted: "February 22, 2024",
    },
    {
      id: 2,
      title: "Blog 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      datePosted: "January 22, 2024",
    },
    {
      id: 3,
      title: "Blog 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      datePosted: "February 02, 2024",
    },
    {
      id: 4,
      title: "Blog 4",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      datePosted: "March 22, 2024",
    },
  ];

  const blogData = blogs.find((blog) => blog.id == blogId.blogId)

  return(
    <>
    <Header />
    <main className="container py-4">
    <h1>{blogData.title}</h1>
    <small>Posted on {blogData.datePosted}</small>
    <p className="pt-3">{blogData.content}</p>
    </main>
    
    <Footer />

    </>
  ) 
}

export default BlogDetails;
