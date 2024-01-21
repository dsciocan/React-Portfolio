import React from "react";
import { NavLink } from 'react-router-dom'; 
import "./navbar.css"


function Navbar() {
    return(
    <div className="container-fluid sticky-top">
    <div className="row">
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">Daniela Ciocan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
            <h5>Home</h5>
        </NavLink>
        <NavLink
          to="/projects"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
            <h5>My Projects</h5>
        </NavLink>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
            <h5>Contact</h5>
        </NavLink>
        </div>
        </div>
    </nav>
    </div>
</div>
    )
}


export default Navbar