import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#2196F3',
      color: '#fff', 
      padding: '4px', 
      textAlign: 'center',
      position: 'fixed', 
      bottom: 0, 
      width: '100%' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ marginBottom: '10px', fontSize: '1.2em' }}>
          By Christine Juma
        </p>
        <p>&copy; 2023 Kenya National Highways Authority</p>
      </div>
    </footer>
  );
}

export default Footer;

