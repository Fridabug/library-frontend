import React, { useContext } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/main/Home';
import Authentication from './components/authentication/Authentication';
import Book from './components/book/Book'
import UserContext from './context/userContext';


function App() {
  const { currentUser } = useContext(UserContext);
 

  return (
    <div className="App">
      <Routes>
      {currentUser !== null ? (
        <Route path='/' element={<Home/>} />
        )
        : (
        <Route path='/' element={<Authentication />} />
         )}
         <Route path='/:bookId' element={<Book />} /> 
        {/*<Route path='*' element={<Navigate to='/' />} />*/}
      </Routes>
    </div>
  );
}

export default App;
