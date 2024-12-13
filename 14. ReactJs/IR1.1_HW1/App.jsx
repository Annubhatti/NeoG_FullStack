/**
 * 1. Create a React component called Heading, to display a heading as "React Playground".

2. Create a React component called Greetings, to display a heading as "Hello, Alice Smith!" where Alice Smith is a dynamic data. 

3. Create a React component called ExternalLink, to display the link text "Visit React Examples". Link the text to https://www.reactexamples.com and upon clicking the link it should open in a new tab.

4. Create a React component called Avatar, to display a placeholder image of 200x200.

5. Create a React component called UserInfo to display the following user info.

const user = {

    name: "Alice Smith",

    age: 28,

    email: "alice.smith@example.com",

    bio: "Passionate about React and building innovative web applications."

  };



Expected Output:
React Playground
Hello, Alice Smith!
Visit React Examples
then image box
User Information
Name: "Alice Smith",

    Age: 28,

    Email: "alice.smith@example.com",

    Bio: "Passionate about React and building innovative web applications."

 */

// React is a javaScript Library
// react itself writen in js 
// React we write code in small function they are called Components
// Components it can be reuseable in other files 
// these componentes use syntax of jsx 
// u should write component name with first letter capital App()

import './App.css'

const Heading = () => {
    return <h1>React Playground</h1>
}

const name = "Alice Smith"
const Greetings = () => {
    return <h1>Hello, {name}!</h1>
}

const ExternalLink = () => {
    const url = "https://www.reactexamples.com"
    return <a href={url} target="_blank">Visit React Examples</a>
}

const Avatar = () => {
    const imageUrl = "https://via.placeholder.com/200x200"
    return (
        // we used here div because we nedd to show image in next line
    <div>
        <img src={imageUrl} alt='placeholder' />
    </div>
    )
}

const UserInfo = () => {
    const user = {
        name: "Alice Smith",
        age: 28,
        email: "alice.smith@example.com",
        bio: "Passionate about React and building innovative web applications."
    
      };

    return (
        //in jsx if you want to show multiple html elements you have to ensure all are wrapeed in enclosing tag like div, reactfragment <></>
        <div>
            <h2>Profile Details</h2>
            <p><strong>Name: </strong>{user.name}</p>
            <p><strong>Age: </strong>{user.age}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <p><strong>Bio: </strong>{user.bio}</p>
        </div>
    )
}

export default function App(){
    return (
        <div>
            <Heading />
            <Greetings />
            <ExternalLink />
            <Avatar />
            <UserInfo />
        </div>
    )
}

