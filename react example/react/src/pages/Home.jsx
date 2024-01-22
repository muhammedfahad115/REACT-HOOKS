import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import axios from 'axios'
function Home() {
    const [data,setData] = useState([])
    async function fetchUser(){
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(result.data)
        setData(result.data)
    }
    useEffect(()=>{
        fetchUser()
    },[])

  return (
    <div>
        <Header/>
        {
            data.map((user,index)=>{
                return <Card key={index}  user={user} />
            })
        }
        <Footer/>
    </div>
  )
}

export default Home