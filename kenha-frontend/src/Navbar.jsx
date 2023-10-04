import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <Button color="inherit">Home</Button>
      </Link>
      <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
        <Button color="inherit">Register</Button>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
        <Button color="inherit">Login</Button>
      </Link>
      <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
        <Button color="inherit">Projects</Button>
      </Link>
      <Link to="/services" style={{ textDecoration: 'none', color: 'white' }}>
        <Button color="inherit">Services</Button>
      </Link>
      <Link to="/contacts" style={{ textDecoration: 'none', color: 'white' }}>
        <Button color="inherit">Contacts</Button>
      </Link>
    </div>
  );
}

export default Navbar;








