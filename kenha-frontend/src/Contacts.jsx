import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [contacts, setContacts] = useState([]);

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
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Contact Data</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contacts.map(contact => (
          <li key={contact.id} style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.6' }}>
            <strong>Name:</strong> {contact.name}, <strong>Email:</strong> {contact.email}, <strong>Message:</strong> {contact.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;

