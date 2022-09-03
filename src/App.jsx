import './App.css'
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NavBar from './NavBar'
import Products from './Products'
import Mobile from './Mobile'
import Laptop from './Laptop'
import Trend from './Trend'
import User from './User'
import React, { createContext } from 'react'
import Heavy from './Heavy'
import Profile from './Profile'
// import { AuthProivder } from './auth.js'
//implmenting lazy load
const LazyLayout = React.lazy(()=> import ("./Heavy.jsx"));

import {UserStateProvider} from './auth.jsx';
import Login from './Login'


function App() {
   const nav = useNavigate()

  return (
   <>
 {/* <AuthProivder> */}
 <UserStateProvider>
 <NavBar/>
 
 <button onClick={()=> nav('product')}>EXplore Products</button>

<Routes>
  <Route path='/text' element={
  //<React.Suspense fallback="lloading.....">
  <LazyLayout/>
  //</React.Suspense>
  }></Route>
  <Route path='/product'  element={<Products />}>
    <Route index element={<Trend/>}></Route>
      <Route path='mobile' element={<Mobile/>}></Route>
      <Route path='laptop' element={<Laptop/>}></Route>
    </Route>
    <Route path='/user:id' element={<User/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/login'  element={<Login/>}> </Route>
</Routes>
</UserStateProvider>
 {/* </AuthProivder> */}
 </>
  )
}



export default App
