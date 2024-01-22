import React, { useRef } from 'react'
function Component1() {
    const ref = useRef("")
    const user =  ref.current
    
  return (
    <>
    <input type="text" ref={ref}  value='miki' placeholder='type something here...' />
    {console.log(user.value)}
    
    </>
  )
}

export default Component1