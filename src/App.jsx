import React from 'react';
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header'
import ProjectGallery from './components/Project-Gallery/project-gallery'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home';

function App() {


  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<ProjectGallery/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
