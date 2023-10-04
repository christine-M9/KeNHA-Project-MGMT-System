import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url('./images/bar.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      animation: 'fadeIn 3s forwards', 
    }}>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <h1 style={{ fontSize: '3rem', margin: '0', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', }}>
        KENYA NATIONAL HIGHWAYS AUTHORITY
      </h1>
    </div>
  );
}

export default Home;


