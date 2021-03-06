import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/reminderinput">Create A Reminder</NavLink>
          <NavLink to="/stuff">Relevant Implications</NavLink>
       </div>
    );
}
 
export default Navigation;