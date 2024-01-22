import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const [value,setValue] = useState('')
  const [initial,setInitial] = useState(true)
  function fetchUser(){
    console.log('fetched')
  }
  useEffect(()=>{
  if(!initial){
    const timeOut  = setTimeout(()=>{
      console.log('this',value)
      fetchUser()
    },1000)
    return ()=>{
      clearTimeout(timeOut)
    }
  }else{
    setInitial(false  )
  }
  },[value])
  const setChange = (e)=>{
    setValue(e.target.value)
  }
  return (
    <>
<div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900 animate-background'>
  <div className='bg-gray-800 p-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105'>
    <input
      type="text"
      className='border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500 hover:bg-gray-700 text-white transition duration-300 ease-in-out'
      placeholder='Enter text...'
      onChange={setChange}
    />
  </div>
</div>


    </>
  )
}

export default App
