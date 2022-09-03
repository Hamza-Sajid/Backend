import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserState } from './auth'


function NavBar() {
  
  const {username} =useContext(UserState);
  // const name = 'Hamza'
  return (
    <nav>
    <h2>This is Navigation Bar for user {username}  </h2>
    
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        {
          username== null? 
            <NavLink to="/login">Profile</NavLink>:          
          <NavLink to="/profile">Profile</NavLink>
        }
        
        {!username &&(
          <NavLink  to="/login"> Login </NavLink>
        )
        }
    </nav>
  )
}

export default NavBar