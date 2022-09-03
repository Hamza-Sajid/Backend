import { createContext, useState } from "react";

const UserState = createContext();


const UserStateProvider = ({children}) =>
{

const [username,setUsername]=useState();


const login=(e) =>
{
    setUsername(e);
}

const logout = (e)=>
{
    setUsername('');
}

return(
    <UserState.Provider value={{username, login , logout}}>
        {children}
    </UserState.Provider>
)};


export {UserState,UserStateProvider};

