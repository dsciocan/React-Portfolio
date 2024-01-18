import React from "react";
import "./footer.css"

function Footer() {
return (
<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
<div class="col-md-4 d-flex align-items-center">
  <span class="mb-3 mb-md-0 text-muted">2024 Daniela Ciocan</span>
</div>

<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
  <li class="ms-3"><a class="text-muted" href="https://github.com/dsciocan">Profile</a></li>
  <li class="ms-3"><a class="text-muted" href="https://github.com/dsciocan/React-Portfolio">Repo</a></li>
  <li class="ms-3"><a class="text-muted" href="https://docs.google.com/document/d/1yBdz1xNkIWHQGj8r4qqB2yG-ZT0M-LCJmvnAcHOuQGs/edit?usp=sharing">Resume</a></li>
</ul>
</footer>)
}

export default Footer