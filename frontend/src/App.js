//import './App.css';
//import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Academics from './pages/Academic';
import Admissions from './pages/Admission';
function App() {
  return (


    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
       
        </Routes>
       
    
  );
}

export default App;
