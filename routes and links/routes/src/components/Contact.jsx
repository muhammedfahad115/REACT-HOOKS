import React from 'react'

function Contact() {
  return (
    <><div className="flex flex-col items-center">
    <h1 className="text-2xl font-bold mb-4">Users List</h1>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* User 1 */}
      <div className="bg-gray-200 p-4 rounded-md">
        <img
          src="https://placekitten.com/150/150"  // Example image, replace with actual user image
          alt="User 1"
          className="w-full h-32 object-cover mb-2 rounded-full"
        />
        <h2 className="text-lg font-semibold">User 1</h2>
        <p className="text-gray-500">user1@example.com</p>
      </div>
  
      {/* User 2 */}
      <div className="bg-gray-200 p-4 rounded-md">
        <img
          src="https://placekitten.com/150/151"  // Example image, replace with actual user image
          alt="User 2"
          className="w-full h-32 object-cover mb-2 rounded-full"
        />
        <h2 className="text-lg font-semibold">User 2</h2>
        <p className="text-gray-500">user2@example.com</p>
      </div>
  
      {/* Add more users as needed */}
    </div>
  </div>
  </>
  )
}

export default Contact