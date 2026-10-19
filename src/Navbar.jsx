import React from 'react'

import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <div>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/about">About</NavLink>
             <NavLink to="/contact">Contact</NavLink>
             <NavLink to="/Effect">Effect</NavLink>
             <NavLink to="/Button">Button</NavLink>
        </div>
    )
}

export default Navbar