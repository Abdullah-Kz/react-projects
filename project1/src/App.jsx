
import './App.css'

function App() {
  const changebg = (classayi) => {
    document.body.style.backgroundColor = classayi.target.className.split(' ')[0]
  }
  
  return (
    <>
      <div className = 'box'>
        <button onClick = {changebg} className = 'red but'>Red</button>
        <button onClick = {changebg} className = 'green but'>Green</button>
        <button onClick = {changebg} className = 'blue but '>Blue</button>
        <button onClick = {changebg} className = 'olive but'>olive</button>
        <button onClick = {changebg} className = 'gray but'>Gray</button>
        <button onClick = {changebg} className = 'yellow but'>Yellow</button>
        <button onClick = {changebg} className = 'pink but'>Pink</button>
        <button onClick = {changebg} className = 'purple but'>Purple</button>
<button onClick = {changebg} className = 'lavender but'>Lavender</button>
<button onClick = {changebg} className = 'white but'>White</button>
<button onClick = {changebg} className = 'black but'>Black</button>
      </div>
    </>
  )
}

export default App
