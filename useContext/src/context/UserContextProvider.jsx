import React, { createContext, useState } from 'react'

export const userContext = createContext()

function UserContextProvider({children}) {
    const [count,setCount] = useState(0)
  return (
    <>
    <userContext.Provider value={{count,setCount}}>
        {children}
    </userContext.Provider>
    </>
  )
}

export default UserContextProvider