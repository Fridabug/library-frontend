import React, {useContext} from "react";
import userContext from '../../context/userContext'
import bookContext from '../../context/bookContext'
import {Link} from 'react-router-dom'
import './home.styles.scss'
import NavBar from '../navbar/NavBar'
import Search from "./search/Search";
function Home() {

    const {books} = useContext(bookContext)
    const {currentUser} = useContext(userContext);

    return(
        <>
        <NavBar/>
        {currentUser && 
            <div className='home-container'>
                {/* <h1>All books</h1> */}
                <Search/>
                <div className='books-container'>
                    {books.map((book, i) => 
                        <div className='book-container' key={book.id}>
                            <div className='title'>
                                <h3>{book.title[0].toUpperCase()+ book.title.slice(1)}</h3>
                            </div>
                            
                            <div className='image-container'>
                                <img src={book.imageUrl + i +1} alt="book cover"/>
                            </div>
                            <div>
                                <Link to={`/$`}><button className="btn card-btn" onClick={() => {}}>Read more</button></Link>
                                {!book.rented_by ? 
                                    <button className="btn card-btn" onClick={()=> {}}>Rent this book</button> : 
                                    <span>Not available</span>
                                }
                            </div>
                            

                        </div>)}
                </div>
            </div>}
      
        </>
    )
}

export default Home;