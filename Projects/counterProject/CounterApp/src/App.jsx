import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  const addValue = () => {
    // normal flow
    setCounter(counter+1);

    // case one if i duplicate the cals
    // soln: this is the story of useState variable its send the bach  of same type hum ak same kaam ko 
   // repeat kr rhe baar baar to ye ak baar hi increase kre ga sbke liye ak sath output 6 
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);

    // optimization of above code use setCounterFun
    setCounter((preval) => preval+1); //6
    setCounter((preval) => preval+1);//7

    setCounter((preval) => preval+1);//8
    setCounter((preval) => preval+1);//9

  }

  const removeValue = () => {
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>
        Add Value {counter}</button>

        <button
      onClick={removeValue}>
        Remove Value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
