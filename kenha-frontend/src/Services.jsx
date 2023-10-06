import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/services')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setServices(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <ul>
        {services.map(service => (
          <li key={service.id}>{service.title}</li>
        ))}
      </ul>
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <img
          src="/tee.jpeg"
          alt="Service Image"
          style={{ maxWidth: '60%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
};

export default Services;
