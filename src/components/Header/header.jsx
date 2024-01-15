import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";

function Header() {

    const [small, setSmall] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
          setSmall(window.scrollY > 200)
        );
      }
    }, []);

    return (
    <>
        <Navbar />
        <header className={`header ${
            small ? "small" : ""
          }`}>
            <div className="container-fluid px-4 py-5">
            <div className="row d-flex align-items-center justify-content-between">
            <div className="col-10 col-sm-8 col-lg-6">
            <img src="/assets/self-pic.jpg" className="d-block mx-lg-auto rounded-circle " alt="Picture of myself" width="425px" height="450px" loading="lazy"/>
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Passionate Front End Web Developer</h1>
                <p className="lead">I'm Daniela and I always aspire to improve myself as a web developer. This is my portfolio page, where you can find out more about me and my work.</p>
                <p className="lead">For enqiries see the contact section.</p>
            </div>
            </div>
        </div>
      </header>
      </>
    )
}
  

export default Header