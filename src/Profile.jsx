import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserState } from './auth'

function Profile() {
    // const {username,  logout } = useContext(UserState);
    const {logout , username}=useContext(UserState);
const nav = useNavigate();
    // const {} = useContext(UserState);
    const logmeout = (e) =>
    {
        
        // e.preventDefault();
            // logout();
            console.log('clicking');
    }
    const handleme = () =>
    {
        console.log('deleting user ');
        logout()
        nav('/');
    }
  return (
    <div>
        <h3>PRofile page username: {username}</h3>
        <button onClick={handleme}>LOGOUT</button>
    </div>
  ) 
}

export default Profile