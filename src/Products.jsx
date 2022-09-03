import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
    
  return (
    <div>
        <ul>
        <NavLink to="mobile">
        <li>
                Mobile is 
                
            </li>
            
        </NavLink>
            <NavLink to="laptop">
            <li>LAptop</li>
            </NavLink>
            <li>DSLR</li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Products