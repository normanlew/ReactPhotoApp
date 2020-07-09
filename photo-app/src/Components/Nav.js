import React from 'react';
import {NavLink} from 'react-router-dom';

// The navigation buttons search for photos of predetermined topics
const Nav = () => (
  <header className="main-nav">
    <ul >
      <li><NavLink to="/search/cat">Cats</NavLink></li>
      <li><NavLink to="/search/dog">Dogs</NavLink></li>
      <li><NavLink to="/search/bird">Birds</NavLink></li>
    </ul>    
  </header>
);

export default Nav;