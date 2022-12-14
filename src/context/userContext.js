import React, {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [formData, setFormData] = useState({});
    const [currentUser, setCurrentUser] = useState(null);
    const [submit, setSubmit] = useState(false);
    const [message, setMessage] = useState(null)

    let navigate = useNavigate();


    const inputHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
       
      }
    
    const signIn = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5001/user/login', formData)
        .then(response => {

            if(response.data.email) {
                setCurrentUser(response.data)
            }
            setMessage(response.data)
            setSubmit(true)
            // navigate('/home')
        })
        .catch(e => console.log(e));
    }

    console.log('currentUser', currentUser);
    console.log('message', message)

    const signOut = () => {
        setCurrentUser(null);
        navigate('/')
    }


    

    const value = {signIn, inputHandler, signOut, currentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


export default UserContext;


