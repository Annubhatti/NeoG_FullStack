/*
Create a small web page which shows some detail about a blog. You should have the Header, BlogDetails and the Footer component. All the nav items should be linked to the home page. Create a blog data object based on the details displayed below. Your web page should like below.
Welcome to Our Blog
Home
About
Contact
The Importance of Learning React
author: Jane Doe

Date: March 1, 2024

© 2024 Our Blog. All rights reserved.
*/
//
import './App'

const Header = () => {
    return(
        <header>
            <h1>Welcome to Our Blog</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const BlogDetails = ({data}) =>{
    return(
        <div>
            <h2>The Importance of Learning React</h2>
            <p>author: {data.author}</p>
            <p>Date: {data.date}</p>
        </div>
    )
}

const Footer = () =>{
    return(
        <footer>
            <p>&copy; 2024 Our Blog. All rights reserved.</p>
        </footer>
    )
}

export default function App(){

    const data = {
        author: "Jane Doe",
        date: "March 1, 2024"
    }

    return(
        <div>
            <Header />
        <main>
            <BlogDetails data={data} />
        </main>
        <Footer />
        </div>
    )
}