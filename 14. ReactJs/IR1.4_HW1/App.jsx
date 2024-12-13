/*
Create a small web page which shows some detail about smartphone. You should have the Header, SmartphoneDetails and the Footer component. All the nav items should be linked to the home page. Create a smartphone data object based on the details displayed below. Your web page should like below.
Welcome to Our Website
Home
About
Contact
Smartphone
Category: Electronics

Price: $799.99

Stock: 100

© 2024 Our Company. All rights reserved.
*/

//
import './App'

const Header = () => {
    return(
        <header>
            <h1>Welcome to Our Website</h1>
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

const SmartphoneDetails = ({data}) =>{
    return(
        <div>
            <h2>Smartphone</h2>
            <p>Category: {data.category}</p>
            <p>Price: {data.price}</p>
            <p>Stock: {data.stock}</p>
        </div>
    )
}

const Footer = () =>{
    return(
        <footer>
            <p>&copy; 2024 Our Company. All rights reserved.</p>
        </footer>
    )
}

export default function App(){

    const data = {
        category: "Electronics",
        price: "$799.99",
        stock: 100
    }

    return(
        <div>
            <Header />
        <main>
            <SmartphoneDetails data={data} />
        </main>
        <Footer />
        </div>
    )
}
