import React from "react";
import "./footer.css"

function Footer() {
return (
<footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
<div className="col-md-4 d-flex align-items-center">
  <span className="mb-3 mb-md-0">2024 Daniela Ciocan</span>
</div>
<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li className="ms-3"><a href="https://github.com/dsciocan">GitHub Profile</a></li>
  <li className="ms-3"><a href="https://github.com/dsciocan/React-Portfolio">Repo</a></li>
</ul>
</footer>
)
}

export default Footer