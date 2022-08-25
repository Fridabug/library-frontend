import React, {useContext} from 'react'
import userContext from '../../context/userContext'
import './navbar.styles.scss'

function NavBar() {

    const {signOut} = useContext(userContext);
  return (
    <>
      <div className='navbar-border'></div>
      <nav className="navbar-container">
          <span onClick={signOut}>Sign out</span>
      </nav>
    </>
  )
}

export default NavBar