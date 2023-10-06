import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Our Projects</h1>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {projects.map(project => (
          <li style={{ fontSize: '18px', marginBottom: '8px' }} key={project.id}>{project.title}: {project.description}</li>
        ))}
      </ul>
      <img
        src="/Rv.jpeg"
        alt="Project Image"
        style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
      />
    </div>
  );
};

export default Projects;


