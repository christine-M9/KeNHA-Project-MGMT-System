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
        <Button color="inherit">Kenha</Button>
      </Link>
      <Link to="/home" style={buttonStyle}>
        <Button color="inherit">Gallery</Button>
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
      <Link to="/mylogo" style={buttonStyle}>
        <Button color="inherit">Logo</Button>
      </Link>
      <Link to="/myregister" style={buttonStyle}>
        <Button color="inherit">Sign Up</Button>
      </Link>
      <Link to="/mylogin" style={buttonStyle}>
        <Button color="inherit">Login</Button>
        </Link>
      
    </div>
  );
}

export default Navbar;













