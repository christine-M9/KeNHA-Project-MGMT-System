import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'lightgrey',
      color: 'brown', 
      padding: '1px', 
      textAlign: 'center',
       
      bottom: 0, 
      width: '100%' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ marginBottom: '10px', fontSize: '1.4em' }}>
          By Christine Juma
        </p>
        <p>&copy; 2023 Kenya National Highways Authority</p>
      </div>
    </footer>
  );
}

export default Footer;