
import { useEffect } from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'

function App() {
  const count = useSelector((store)=> store.counter)
  const dispatch = useDispatch()

  return (
    <>
    <button onClick={()=>{dispatch({type: "INCREMENT"})}}>Increment</button>
      <h1>{count}</h1>
    <button onClick={()=>{dispatch({type: "DECREMENT"})}} >Decrement</button>
    <br />
    <br />
    <button onClick={()=>{dispatch({type: "CLEAR"})}}>Clear</button>
    </>
  )
}

export default App
