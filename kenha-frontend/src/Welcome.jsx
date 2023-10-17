import React from 'react';
import { Typography, Grid } from '@mui/material';

const Welcome = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/con.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
  };

  const gridItemStyle = {
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
    background: 'rgba(0, 0, 0, 0.3)',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h2" style={{ marginBottom: '20px' }}>WELCOME TO KENHA</Typography>

      <Grid container spacing={3} justifyContent="center">
        {[
          { title: 'Our Vision', content: 'The leading Authority in the provision of National Trunk Roads.' },
          { title: 'Our Mission', content: 'To develop and manage Quality and Adequate National Trunk Roads through Innovation and Optimal utilization of resources for Sustainable Development.' },
          { title: 'Our Mandate', content: 'To manage, develop, rehabilitate, and maintain national trunk roads.' },
          { title: 'Our Core Values', content: ['Team Work', 'Accountability', 'Innovation'] },
          { title: 'Quality Policy Statement', content: [
            'Kenya National Highways Authority is committed to Develop and Manage Quality and Adequate National Trunk Roads through Innovation and Optimization of resources for Sustainable Development.',
            'Top Management of KeNHA is committed to comply with national policies, directives, circulars, regulatory and statutory requirements, customer requirements and contractual obligations. We commit to review this policy at least once every three years.',
            'The Top Management of KeNHA commits to provide the necessary resources towards the effective implementation and continual improvement of the Quality Management System that conforms to the requirement of ISO 9001:2015 Standard.',
            'Quality objectives shall be established at all functional levels in the Authority on an annual basis derived from the organization’s strategic objectives.'
          ] },
        ].map((section, index) => (
          <Grid item xs={12} md={8} key={index} style={gridItemStyle}>
            <Typography variant="h4" style={{ marginBottom: '10px', color: 'white' }}>{section.title}</Typography>
            {Array.isArray(section.content) ? (
              <ul>
                {section.content.map((item, i) => <li key={i} style={{ color: 'white' }}>{item}</li>)}
              </ul>
            ) : (
              <Typography variant="body1" style={{ color: 'white' }}>{section.content}</Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Welcome;
