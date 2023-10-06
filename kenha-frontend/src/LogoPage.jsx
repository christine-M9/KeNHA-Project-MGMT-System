import React from 'react';

const LogoPage = () => {
  const containerStyle = {
    backgroundImage:"url('/logo.jpg')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '400px', 
    textAlign: 'center',
    color: 'brown'
  };

  return (
    <div style={containerStyle}>
      <h1>Logo</h1>

      <div>
        <h2></h2>
        <p></p>
      </div>

      <div>
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
}

export default LogoPage;



