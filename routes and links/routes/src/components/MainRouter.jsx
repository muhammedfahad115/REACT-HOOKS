import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'

function MainRouter() {
  return (
    <>
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Shibily&Fahad    Co Products</Link>
        <div className="flex space-x-4">
          <Link to="/About" className="text-white hover:text-gray-300 transition duration-300">About</Link>
          <Link to="/Home" className="text-white hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/Contact" className="text-white hover:text-gray-300 transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route  path='/about' element={<About/>}></Route>
        <Route path='/*'  element={<NotFound/>}></Route>
    </Routes>
    </> 
  )
}

export default MainRouter