import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
     <>
    <h1 className="head">Welcome to my projects!!</h1>
    <div> 
        <center>
    <NavLink exact activeClassName="active_class" to='/' className="links">
                To do list
            </NavLink>
            <NavLink exact activeClassName="active_class" to='/Dcard' className="links">
               Top netflix series
               </NavLink>
               <NavLink exact activeClassName="active_class" to='/digitalclock' className="links">
              Digital clock
               </NavLink>   
                <NavLink exact activeClassName="active_class" to='/incdec' className="links">
             Increment-Decrement
               </NavLink>
               </center>
            </div>
     </>
    )
}

export default Navbar
