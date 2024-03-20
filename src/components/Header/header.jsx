import React, { useEffect, useState } from "react";
import "./header.css"
import { Link } from "react-router-dom";


function Header() {

    return (
    <>
        <header className="header">
            <div className="container-fluid px-4 py-2">
            <div className="row d-flex align-items-center justify-content-between">
            <div className="col-10 col-sm-8 col-lg-6">
            <img src="/assets/self-pic.jpg" className="d-block mx-lg-auto rounded-circle " alt="Picture of myself" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Passionate Front End Web Developer</h1>
                <p className="lead">Hey there! I'm Daniela, a dedicated web developer on a constant quest for improvement. Explore my portfolio to see what I'm passionate about.</p>
                <p className="lead">Questions, comments, or suggestions? I'd love to hear from you! Drop me a line via the <Link id="head-link" to="/contact">contact</Link> section.</p>
            </div>
            </div>
        </div>
      </header>
      </>
    )
}
  

export default Header