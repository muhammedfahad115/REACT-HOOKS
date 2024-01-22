import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react'
import CounterButton from './components/CounterButton'

function App() {
  const [count,setCount] = useState(0)

  const Increment = useCallback(()=>{
    setCount((prevcount)=> prevcount + 1)
  },[count])

  return (
    <>
    <h2 style={{color:'red'}}><u>Counter App</u></h2>
    <p style={{ fontSize: '2rem', color: 'white' }}>Count: {count}</p>
    <CounterButton onClick={Increment}/>
    </>
  )
}

export default App
