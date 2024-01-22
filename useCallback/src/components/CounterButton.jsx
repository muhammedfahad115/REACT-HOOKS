import React from 'react'

function CounterButton({onClick}) {
    console.log('CounterButton rendered')
  return (
    <>
    <button onClick={onClick}>Increment count</button>
    </>
  )
}

export default CounterButton