import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
  <header className="main-nav">
    {/* <span className="icn-logo"><i className="material-icons">code</i></span> */}
    <ul >
      {/* <li><NavLink exact to="/">Home</NavLink></li> */}
      <li><NavLink to="/cats">Cats</NavLink></li>
      <li><NavLink to="/dogs">Dogs</NavLink></li>
      <li><NavLink to="/birds">Birds</NavLink></li>
    </ul>    
  </header>
);

export default Nav;