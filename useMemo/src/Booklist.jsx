import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const allBooks =[
    {title : "Book 1", genre : "Fiction"},
    {title : "Book 2", genre : "Non-fiction"},
    {title : "Book 3", genre : "Fiction"}
]
function Booklist() {
    const [genreFilter,setGenreFilter] = useState('All');
    const filteredBooks = useMemo(()=>{
        console.log('Filtered books...')
        if(genreFilter === "All"){
            return allBooks;
        }else{
            console.log(genreFilter)
            return allBooks.filter((books)=>books.genre === genreFilter) 
           
        }
    },[genreFilter])
  return (
    <>
   <div style={{
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f4f4f4',
    }}>
      <h2 style={{
        color: 'red',
        borderBottom: '2px solid #888',
        paddingBottom: '5px',
        marginBottom: '15px',
      }}>Book List</h2>
      <label style={{
        display: 'block',
        marginBottom: '10px',
        color: '#666',
      }}>
        Filter by Genre:  
        
        <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} style={{
            marginLeft: "10px",
          padding: '8px',
          fontSize: '16px',
          backgroundColor: '#fff',
          color: '#333',
          border: '1px solid #888',
          borderRadius: '5px',
        }}>
          <option value="All">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">No-Fiction</option>
        </select>
      </label>
      <ul style={{
        listStyleType: 'none',
        padding: '0',
      }}>
        {filteredBooks.map((book, index) => (
          <li key={index} style={{
            borderBottom: '1px solid #ccc',
            padding: '10px 0',
            color: '#444',
          }}> {book.title} - {book.genre}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Booklist