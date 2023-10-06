import React from 'react';

const Welcome = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/con.jpeg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', 
  };

  return (
    <div style={containerStyle}>
      <h1>WELCOME TO KENHA</h1>
      <h2>Our Vision</h2>
      <p>The leading Authority in the provision of National Trunk Roads.</p>

      <h2>Our Mission</h2>
      <p>To develop and manage Quality and Adequate National Trunk Roads through Innovation and Optimal utilization of resources for Sustainable Development.</p>

      <h2>Our Mandate</h2>
      <p>To manage, develop, rehabilitate, and maintain national trunk roads.</p>

      <h2>Our Core Values</h2>
      <ul>
        <li>Team Work</li>
        <li>Accountability</li>
        <li>Innovation</li>
      </ul>

      <h2>Quality Policy Statement</h2>
      <p>
        Kenya National Highways Authority is committed to Develop and Manage Quality and Adequate National Trunk Roads through Innovation and Optimization of resources for Sustainable Development.
      </p>
      <p>
        Top Management of KeNHA is committed to comply with national policies, directives, circulars, regulatory and statutory requirements, customer requirements and contractual obligations. We commit to review this policy at least once every three years.
      </p>
      <p>
        The Top Management of KeNHA commits to provide the necessary resources towards the effective implementation and continual improvement of the Quality Management System that conforms to the requirement of ISO 9001:2015 Standard.
      </p>
      <p>
        Quality objectives shall be established at all functional levels in the Authority on an annual basis derived from the organization’s strategic objectives.
      </p>
    </div>
  );
}

export default Welcome;
