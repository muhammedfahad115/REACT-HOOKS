import React, { useContext } from 'react'
import { userContext } from '../context/UserContextProvider'
import Components3 from './Components3'

function Components2() {
    const {count,setCount} = useContext(userContext)
  return (
    <>
    <br />
    <h2 className='text-2xl font-serif font-extrabold  bg-yellow-400'>Component 2 </h2>
    <div> <br /><p className=' text-blue-700 text-xl font-serif font-bold'>Passed Count : {count}</p></div>
    <button  className=' bg-stone-600 rounded-md p-2 text-black font-semibold  ' onClick={()=>(setCount(count-1))}>minus Count</button>
    <Components3/>
    </>
  )
}

export default Components2

