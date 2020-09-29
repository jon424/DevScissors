import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

var divStyle = {
  color: 'blue',
  textDecoration: 'underline red'
};

const Notfound = () =>
  <div>
    <h1 style={{ color: 'black' }}>Page Not found</h1>
    <Link to='/' activeClassName='active'>
      <h1 style={divStyle}>Go Back Home</h1>
    </Link>
  </div>

export default Notfound;