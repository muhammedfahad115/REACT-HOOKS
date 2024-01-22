import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [inputValue,setinputValue] = useState('')
  const [submittedValue,setsubmittedValue] = useState(null)
  const handleSubmit = useCallback((e)=>{
    e.preventDefault();
    setsubmittedValue(inputValue)
  },[inputValue])
  // const handleSubmit =(e)=>{
  //   e.preventDefault();
  //   setsubmittedValue(inputValue)
  //   console.log('sadhanam ivde kittiyittund ')
  // }
  return (
    <>
     <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Text : <input type='text' value={inputValue} onChange={(e)=>setinputValue(e.target.value)} />
        </label>
        <button type='submit'>Submit</button>
      </form>
     <p>You submitted : {submittedValue}</p>
     </div>
    </>
  )
}

export default App
