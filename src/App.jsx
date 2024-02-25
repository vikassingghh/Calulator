import { useState } from 'react'
import './App.css'
import Button from './Component/Button/Button'
import Input from './Component/Input/Input'

function App() {
  const [value, setvalue] = useState("");
  return (
    <>
        <Input display={value} newvalue ={setvalue}/>
        
    </>
  )
}

export default App
