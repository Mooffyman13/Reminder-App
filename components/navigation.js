import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Create A Reminder</NavLink>
          <NavLink to="/contact">Stuff</NavLink>
       </div>
    );
}
 
export default Navigation;