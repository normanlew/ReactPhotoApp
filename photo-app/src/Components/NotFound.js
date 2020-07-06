import React from 'react';

// If no photos were found for a given topic, let the user know.
const NotFound = props => (
  <li className="not-found">
    <h2>You search did not return any results. Please try again...</h2>
  </li>
);

export default NotFound;