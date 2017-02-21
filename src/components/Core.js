import React from 'react';
import { Link } from 'react-router';

const Core = ({ children }) => (
  <div>
    <div>
      <Link to="/">Home</Link><br />
      <Link to="/page1">Page 1</Link><br />
      <Link to="/page2">Page 2</Link>
    </div>
    <div>
      { children }
    </div>
  </div>
);

export default Core;
