import { useState, useCallback,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [Numbers, setNumbers] = useState(false)
  const [Characters, setCharacters] = useState(false)
 const passref = useRef(null)
  const generatePassword = useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = ''
    if (Numbers) {
      chars += '0123456789'
    }
    if (Characters) {
      chars += '!@#$%^&*()_+'
    }
    for (let i = 1; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length + 1))
    }
    setPassword(pass)
  }, [length, Numbers, Characters,setPassword])
  useEffect(() => {
    generatePassword();
  },[length,Numbers,Characters,generatePassword])

  const copypassword = useCallback(() => {
  window.navigator.clipboard.writeText(password)
    passref.current.select()
    setTimeout(() => {
      document.getElementById('copytext').innerHTML = 'Copy'
    },1600)
    document.getElementById('copytext').innerHTML = 'Copied'
  },[password])
const truefalsechcker = (val) => {
  if(!val){
    val = true
    return val
  }else{
    val = false
    return val
  }
}
  return (
    <>
    <div className = "passgen">
      <h1 id = 'title'>Password Generator</h1>
      <div>
        <input
        id = 'password'
        type = 'text'
        placeholder = 'Password'
        value = {password}
        ref = {passref}
        readOnly
        />
        <button id = 'copy' onClick = {copypassword}><p id = 'copytext'>Copy</p></button>
        </div>
        <div id = 'options'>
        <input
        id = 'lengthset'
        type = 'range'
        min = {8}
        max = {100}
        value = {length}
        onChange = {(e) => setLength(e.target.value)}
        />
        <label className = 'text'>Length : {length}</label>
        <input
        className = "checkbox"
        id = 'numcheck'
        type = 'checkbox'
        defaultChecked = {Numbers}
        value = {Numbers}
        onChange = {() => {
          setNumbers(truefalsechcker(Numbers))
        }}
        />
        <label className = 'text'>Numbers</label>
        <input
        className = "checkbox"
        id = 'charcheck'
        type = 'checkbox'
        defaultChecked = {Characters}
        value = {Characters}
        onChange = {() => {
          setCharacters(truefalsechcker(Characters))
        }}
        />
        <label className = 'text'>Characters</label>
                </div>
      </div>
    </>
  )
}

export default App
