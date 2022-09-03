import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserState } from './auth';

function Login() {

    const {login}=useContext(UserState);

        const navigate = useNavigate();
    const [user,setUser]=useState('');

    const handle = (e) =>
    {
        e.preventDefault();
        login(user);
            navigate('/' ,  {replace:true})
        
    }

  return (
    <div>
        Username : <input type="text" value={user}
        onChange={(e)=> setUser(e.target.value)}></input>

        <button onClick={handle}>Login</button>
    </div>
  )
}

export default Login