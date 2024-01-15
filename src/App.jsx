import { useState } from 'react'
// import './App.css'
import Header from './components/Header/header'
import ProjectGallery from './components/Project-Gallery/project-gallery'

function App() {


  return (
    <>
      <Header />
      <div className="container-fluid">
      <ProjectGallery/>
      </div>
    </>
  )
}

export default App
