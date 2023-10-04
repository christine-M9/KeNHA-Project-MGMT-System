import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Services = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" paragraph>
        Here are some of the services we offer:
      </Typography>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </Box>
  );
};

export default Services;

