//Props:  data can be passed to your components
//  line 12 passing props to component 
import './App.css'

const Greeting = (props) => {
    return <h1>Hello, {props.name}</h1>
}

const UserDetails = (props) => {
    return(
        <div>
            <h1>User Details</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Country: {props.country}</p>
        </div>
    )
}

const WeatherInfo = (props) => {
    return(
        <div>
            <h1>Weather Info</h1>
            <p>Temperature: {props.temperature} degree celsius</p>
            <p>Condition: {props.condition}</p>
        </div>
    )
}

const UserAvatar = (props) => {
    return(
        <div>
            <h1>User Avatar</h1>
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default function App(){
    return(
        <div>
            <Greeting name="John" />
            <Greeting name="Alice" /> 
            <UserDetails name ="Bob" age={20} country="India" />
            <WeatherInfo temperature={29} condition="Sunny" />
            <UserAvatar img="https://via.placeholder.com/150" alt ="placeholder"/>
        </div>
    )
}