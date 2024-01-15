import React from "react"
import Project from "../Project/project"
import projects from "../../projects.json"

function ProjectGallery() {

    const carousel = projects.filter((project) => 1<project.id && project.id<4)
    const firstEl = projects[0]
    console.log(carousel)
    const entries = carousel.map((element) => <Project key={element.id} className={"carousel-item"} img={element.img} title={element.title} link={element.link}/>)
    console.log(entries)
    // let addClass = () => {entries[0].classList.add("active")}

    return (
    <div className="container-fluid">
    <div className="row">
        <h2>My Projects</h2>
    </div>
    <div className="container-fluid d-flex align-items-center justify-content-center">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"> 
  <div className="carousel-inner">
    <Project className={"carousel-item active"} img={firstEl.img} title={firstEl.title} link={firstEl.link}/>
    {entries}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
  )

}

export default ProjectGallery