import React, { useContext } from 'react'
import { userContext } from '../context/UserContextProvider'

function Components3() {
    const {count,setCount} = useContext(userContext)
  return (
    <>
    <div>
    <br />
    <h2 className='text-2xl font-serif font-extrabold  bg-cyan-400'>Component 3 </h2>
    <br />
        <button className="bg-stone-600 rounded-md p-2 text-black font-semibold " onClick={()=>(setCount(count-count))}>Clear Count</button>
    </div>
    </>
  )
}

export default Components3