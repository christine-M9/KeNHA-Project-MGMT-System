import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

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
        <p>
        <a href="https://github.com/christine-M9" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ margin: '0 10px' }} />
          </a>
          <a href="https://twitter.com/khekamejuma" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={{ margin: '0 10px' }} />
          </a>
          <a href="https://www.instagram.com/khekamejuma" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ margin: '0 10px' }} />
            </a>         
        </p>
        <p>&copy; 2023 Kenya National Highways Authority</p>
      </div>
    </footer>
  );
}

export default Footer;
