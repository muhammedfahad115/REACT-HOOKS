import React from 'react'

function Childcomponent({props}) {
    
  return (
    <>
    <div>
        <button onClick={props}>add count</button>
    </div>
    </>
  )
}

export default Childcomponent