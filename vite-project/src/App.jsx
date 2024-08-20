import { useState } from 'react'
import './app.css'
function App() {
let [counter , setcounter] =  useState(15)
const addvalue = () => {
  if(counter < 20 ){
  setcounter(counter + 1)
  }else{
    alert('Value cannot be greater than 20')
  }
}
const decreasevalue = () => {
  if(counter === 0){
    alert('Value cannot be less than 0')
  }else{
  setcounter(counter - 1)
  }
}
  return (
    <>
    <div id = 'app'>
    <h1>This is a Counter</h1>
    <h2>Counter value is {counter}</h2>
    <button id = "button" onClick = {addvalue}>Click me to increase the value {counter}</button>
    <br/>
    <button id = "button" onClick = {decreasevalue}>Click me to decrease the value {counter}</button>
    </div>
    </>
  )
}

export default App
