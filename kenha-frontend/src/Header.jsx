import React from 'react';
import Navbar from './Navbar'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <h1>KENHA</h1>
        </div>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
}

export default Header;


