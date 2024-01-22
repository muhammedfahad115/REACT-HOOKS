import React from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import Childcomponent from './Childcomponent'

function ParentComponent() {
    const [count,setCount] = useState(0)
    const derivedValue = useMemo(()=>{
      console.log('calculating derived value ....')
      return count * 2
    },[count])

    const handleClick = useCallback(()=>{
        console.log('Button is clicked!')
        setCount((prevcount)=>prevcount + 1)
    },[])

  return (
    <>
    <div>
        <h2>Parent Component</h2>
        <p>count is : {count}</p>
        <p>derivedValue is : {derivedValue}</p>
    </div>
    <Childcomponent props={handleClick}/>
    </>
  )
}

export default ParentComponent