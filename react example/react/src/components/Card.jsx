import React from 'react'

function Card({user}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
   <div className="bg-purple-100 p-6 rounded-md">
  <h1 className="text-xl font-bold">{user.name}</h1>
  <p className="text-lg">{user.username}</p>
  <p className="text-lg">{user.email}</p>
</div>
  </div>
  
  )
}

export default Card