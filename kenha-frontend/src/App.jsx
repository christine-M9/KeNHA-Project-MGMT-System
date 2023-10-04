import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
import Home from './Home';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;












