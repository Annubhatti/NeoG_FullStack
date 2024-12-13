//
import './App'

const Header = () => {
    return(
        <header>
            <h1>Welcome to our Company</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const EmployeeDetails = ({employee}) =>{
    return(
        <div>
            <h2>Employee Details</h2>
            <p>Name: {employee.name}</p>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <p>Email: {employee.email}</p>
        </div>
    )
}

const Footer = () =>{
    return(
        <footer>
            <p>&copy; 2024 Company Name. All rights reserved.</p>
        </footer>
    )
}

export default function App(){

    const employee = {
        id: 1,
        name: "John Doe",
        position: "Software Engineer",
        department: "Engineering",
        email: "john@mail.com"
    }

    return(
        <div>
            <Header />
        <main>
            <EmployeeDetails employee={employee} />
        </main>
        <Footer />
        </div>
    )
}