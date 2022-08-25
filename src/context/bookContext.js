import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import userContext from './userContext'

const BookContext = createContext();

export const BookProvider = ({children}) => {

const {currentUser} = useContext(userContext);

const [books, setBooks] = useState([]);

useEffect(() => {
    axios.get('http://localhost:5001/books/all')
        .then(data => {
            setBooks(data.data)
            console.log(data.data)
        })
        .catch(err => console.error(err))

}, [currentUser])


const [rentedBooks, setRentedBooks] = useState([]);

const addBookItem = (bookToAdd) => {
  const filteredItem = books.find(item => item._id === bookToAdd._id);
  console.log('filtered Item', filteredItem)
  if(filteredItem) {
      filteredItem.rented_by = currentUser._id;
      setRentedBooks([...rentedBooks, filteredItem])
   }
   else {
       return books
   }
}

const value = {books, addBookItem, rentedBooks}

return <BookContext.Provider value={value}>{children}</BookContext.Provider>

}


export default BookContext;