//Conditional Rendering in jsx

import './App.css'

const Message = ({isLoggedIn}) => {
    // if(isLoggedIn){
    //     return <p>Welcome Back, User!</p>
    // } else{
    //     return <p>Please login to continue.</p>
    // }

    return isLoggedIn ? <p>Welcome Back, User!</p> : <p>Please login to continue.</p>
}

const Greeting = ({isMorning}) =>{
    return <p>{isMorning ? "Good Moorning" : "Good Evening!"}</p> // we are using jsx {} because using this we dont need to writie p tag ttwaice
}

const ShowNotification = ({notification}) =>{
   // if there is notificatio then show the nofication we use && operator
   return <div>{notification && <p>{notification}</p>}</div>

}

const TicketPricing = ({passengerAge}) => {
    let price = 100

    return (
        <div>
            {passengerAge > 60 ? <p>Ticket Price: {price - 0.15 * price}</p> : <p>Ticket Price: {price}</p>}
        </div>
    )

}
 
export default function App(){
    return (
        <main>
            <Message isLoggedIn={true} />
            <Greeting isMorning={true} />
            <ShowNotification notification="Notification Message" />
            <TicketPricing passengerAge={70} />
        </main>
    )
}