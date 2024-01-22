import React, { useContext } from 'react'
import { userContext } from '../context/UserContextProvider'
import Components2 from './Components2'

function Components1() {
   const {count,setCount} = useContext(userContext)
  return (
    <>
    <div>
        <h1 className='text-2xl font-serif font-extrabold  bg-red-400'>Component 1</h1>
        <p className=' text-red-600 font-extrabold text-xl font-serif'>Count : {count}</p>
        <br />
        <button  className=' bg-stone-600 rounded-md p-2 text-black font-semibold  ' onClick={()=>(setCount(count+1))}>AddCount</button>

    <Components2/>
      </div>
    </>
  )
}

export default Components1