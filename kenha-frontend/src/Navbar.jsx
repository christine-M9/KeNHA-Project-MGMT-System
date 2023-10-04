import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Navbar() {
  const buttonStyle = {
    textDecoration: 'none',
    color: 'white'
  };

  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Link to="/" style={buttonStyle}>
        <Button color="inherit">Home</Button>
      </Link>
      <Link to="/register" style={buttonStyle}>
        <Button color="inherit">Sign up</Button>
      </Link>
      <Link to="/login" style={buttonStyle}>
        <Button color="inherit">Login</Button>
      </Link>
      <Link to="/logo" style={buttonStyle}>
        <Button color="inherit">Logo</Button>
      </Link>
      <Link to="/projects" style={buttonStyle}>
        <Button color="inherit">Projects</Button>
      </Link>
      <Link to="/services" style={buttonStyle}>
        <Button color="inherit">Services</Button>
      </Link>
      <Link to="/contacts" style={buttonStyle}>
        <Button color="inherit">Contacts</Button>
      </Link>
    </div>
  );
}

export default Navbar;












