import React, {useContext} from 'react'
import bookContext from '../../context/bookContext'
import userContext from '../../context/userContext'

function Profile() {

  const {rentedBooks} = useContext(bookContext)

  return (
    <div className='profile-container'>
      
      
    </div>
  )
}

export default Profile