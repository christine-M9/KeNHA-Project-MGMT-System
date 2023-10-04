import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import LogoPage from './LogoPage';
import Projects from './Projects';
import Services from './Services';
import Contacts from './Contacts';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logo" element={<LogoPage />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;













