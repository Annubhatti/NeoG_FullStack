// React is a javaScript Library
// react itself writen in js 
// React we write code in small function they are called Components
// Components it can be reuseable in other files 
// these componentes use syntax of jsx 
// u should write component name with first letter capital App()

import './App.css'

const MyComponent = () => {
    return <h1>Hello, JSX!</h1>
}

const name = "John"
const Greeting = () => {
    return <h1>Hello, {name}!</h1>
}

const LinkTag = () => {
    const url = "https://example.com"
    return <a href={url} target="_blank">Visit Example Website</a>
}

const ImageTag = () => {
    const imageUrl = "https://via.placeholder.com/150"
    return (
        // we used here div because we nedd to show image in next line
    <div>
        <img src={imageUrl} alt='placeholder' />
    </div>
    )
}

const ProfileDetails = () => {
    const details = {
        name: "John Doe",
        age: 25,
        email: "john@gmail.com",
        bio: "A passionate software developer."
    }

    return (
        //in jsx if you want to show multiple html elements you have to ensure all are wrapeed in enclosing tag like div, reactfragment <></>
        <div>
            <h2>Profile Details</h2>
            <p>Name: {details.name}</p>
            <p>Age: {details.age}</p>
            <p>Email: {details.email}</p>
            <p>Bio: {details.bio}</p>
        </div>
    )
}

export default function App(){
    return (
        <div>
            <MyComponent />
            <Greeting />
            <LinkTag />
            <ImageTag />
            <ProfileDetails />
        </div>
    )
}