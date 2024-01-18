import { useState } from 'react'
// import './App.css'
import Header from './components/Header/header'
import ProjectGallery from './components/Project-Gallery/project-gallery'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

function App() {


  return (
    <>
      <Header />
      <div className="container-fluid">
      <ProjectGallery/>
      </div>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
