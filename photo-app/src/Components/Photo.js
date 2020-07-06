import React from 'react';

// Displays individual photos.  
// Will be used in a larger container, PhotoList, that displays multiple photos.
const Photo = props => (
  <li>
    <img src={props.url} alt=""/>
  </li>
);

export default Photo;