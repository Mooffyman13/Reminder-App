import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div className="navbar">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/reminderinput">Create A Reminder</NavLink>
          <NavLink to="/stuff">Stuff</NavLink>
       </div>
    );
}
 
export default Navigation;