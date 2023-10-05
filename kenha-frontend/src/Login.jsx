import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <Box 
      sx={{ 
        p: 4,
        backgroundImage: "url('/con.jpeg')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',      
      }}
    >
      <div>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default Login;
