import React, {useContext, useState} from 'react'
import bookContext from '../../context/bookContext'
import userContext from '../../context/userContext'
import {useParams, useNavigate} from 'react-router-dom'


function Book() {

const {bookId} = useParams()

let navigate = useNavigate()

const backToHome = () => {
  navigate('/');
}

const {books, addBookItem} = useContext(bookContext);

const book = books.find(b => b._id == bookId);


const addToProfile = () => {
  addBookItem(book)
}

  return (
    <div className='single-book-container'>
        <h3>{book.title[0].toUpperCase()+ book.title.slice(1)}</h3>
        <h4>{book.author}</h4>
        <img src={book.imageUrl}/>
        <p>pages: {book.pages}</p>
        {!book.rented_by ? <div><span onClick={addToProfile}>Add to cart</span></div> : <span>Not available</span>}
        <button onClick={backToHome}>Go Home</button>
    </div>
  )
}

export default Book