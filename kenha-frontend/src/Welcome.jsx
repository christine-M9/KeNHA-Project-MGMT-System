import React from 'react';
import { Typography, Grid } from '@material-ui/core';

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

  return (
    <div style={containerStyle}>
      <Typography variant="h1">WELCOME TO KENHA</Typography>

      <Grid container spacing={3} justify="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h4">Our Vision</Typography>
          <Typography variant="body1">The leading Authority in the provision of National Trunk Roads.</Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4">Our Mission</Typography>
          <Typography variant="body1">To develop and manage Quality and Adequate National Trunk Roads through Innovation and Optimal utilization of resources for Sustainable Development.</Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4">Our Mandate</Typography>
          <Typography variant="body1">To manage, develop, rehabilitate, and maintain national trunk roads.</Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4">Our Core Values</Typography>
          <ul>
            <li>Team Work</li>
            <li>Accountability</li>
            <li>Innovation</li>
          </ul>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h4">Quality Policy Statement</Typography>
          <Typography variant="body1">
            Kenya National Highways Authority is committed to Develop and Manage Quality and Adequate National Trunk Roads through Innovation and Optimization of resources for Sustainable Development.
          </Typography>
          <Typography variant="body1">
            Top Management of KeNHA is committed to comply with national policies, directives, circulars, regulatory and statutory requirements, customer requirements and contractual obligations. We commit to review this policy at least once every three years.
          </Typography>
          <Typography variant="body1">
            The Top Management of KeNHA commits to provide the necessary resources towards the effective implementation and continual improvement of the Quality Management System that conforms to the requirement of ISO 9001:2015 Standard.
          </Typography>
          <Typography variant="body1">
            Quality objectives shall be established at all functional levels in the Authority on an annual basis derived from the organization’s strategic objectives.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
