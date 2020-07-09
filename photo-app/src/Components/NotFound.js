import React from 'react';

// If no photos were found for a given topic, let the user know.
const NotFound = props => (
  <li className="not-found">
    <h3>No results found</h3>
    <p>That search did not return any results.  Please try again.</p>
  </li>
);

export default NotFound;