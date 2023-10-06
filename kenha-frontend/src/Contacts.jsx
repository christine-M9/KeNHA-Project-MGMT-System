import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    author_id: '',
    project_id: ''
  });
  const [showPreviousMessages, setShowPreviousMessages] = useState(false);

  useEffect(() => {
    fetch('/contacts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setContacts(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setContacts([...contacts, data]);
      setFormData({
        name: '',
        email: '',
        message: '',
        author_id: '',
        project_id: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const togglePreviousMessages = () => {
    setShowPreviousMessages(prevState => !prevState);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            style={{ width: '100%', padding: '8px', fontSize: '16px', minHeight: '100px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            name="author_id" 
            value={formData.author_id} 
            onChange={handleChange} 
            placeholder="Author ID" 
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input 
            type="text" 
            name="project_id" 
            value={formData.project_id} 
            onChange={handleChange} 
            placeholder="Project ID" 
            style={{ width: '100%', padding: '8px', fontSize: '16px' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px', fontSize: '16px' }}>Submit</button>
      </form>

      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Contact Messages</h1>

      {contacts.length > 0 && !showPreviousMessages && (
        <button onClick={togglePreviousMessages}>View Previous Messages</button>
      )}

      {showPreviousMessages && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {contacts.map(contact => (
            <li key={contact.id} style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.6' }}>
              <strong>Name:</strong> {contact.name}, <strong>Email:</strong> {contact.email}, <strong>Message:</strong> {contact.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contact;
