import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Register from './Register';
import Login from './Login';
import Projects from './Projects';
import Services from './Services';
import Contacts from './Contacts';
import Navbar from './Navbar';

function Home() {
  return <div className="text-2xl text-center p-10 bg-blue-500 text-white">KENYA NATIONAL HIGHWAYS AUTHORITY</div>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;










