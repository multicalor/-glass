import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'


const Nav = (onClick) => (

    <nav className="nav">
      <ul className="bar">
        <li className='menu-item'><NavLink exact to='/'>Rate</NavLink></li>
        <li className='menu-item'><NavLink to='/op'>Option</NavLink></li>
        {/* <li className='menu-item'><button onClick={onClick}>TestRate</button></li> */}
      </ul>
    </nav>

);

export default Nav;