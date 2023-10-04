import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['./images/bar.jpeg', './images/con.jpeg', './images/R.jpeg', './images/oy.jpeg', './images/gra.jpeg', './images/Cons.jpg', './images/Rv.jpeg',]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div style={{ 
      backgroundImage: `url(${images[currentImage]})`,
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
      <h1 style={{ fontSize: '3rem', margin: '0', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
        KENYA NATIONAL HIGHWAYS AUTHORITY   
      </h1>    
    </div>
  );
}

export default Home;



