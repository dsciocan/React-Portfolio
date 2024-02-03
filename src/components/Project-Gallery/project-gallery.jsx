import React from "react"
import Project from "../Project/project"
import projects from "../../projects.json"
import Header from "../Header/header"
import "./project-gallery.css"

function ProjectGallery() {

    const carousel = projects.filter((project) => 1<project.id && project.id<4)
    const firstEl = projects[0]
    console.log(carousel)
    const entries = carousel.map((element) => <Project key={element.id} captionClass={"carousel-caption"} className={"carousel-item"} img={element.img} title={element.title} link={element.link} height={600} repo={element.repo}/>)
    console.log(entries)
    const cardsEl = projects.filter((project) => project.id>=4);
    const cards = cardsEl.map((el) => 
        <Project key={el.id} captionClass={"card-img-overlay col-lg-4 col-md-8 col-sm-12"} className={"card col-lg-4"} img={el.img} title={el.title} link={el.link} height={400} width="col-lg-4 col-md-8 col-sm-12" repo={el.repo}/>
    )

    return (
    <div className="container-fluid">
    <Header/>
    <div className="d-flex justify-content-center align-items-center" id="project-title">
        <h2>My Projects</h2>
    </div>
    <div className="container-fluid d-flex align-items-center justify-content-center" id="carousel-container">
    <div id="carouselExampleDark" class="carousel carousel-dark slide col-lg-9" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div className="carousel-inner">
        <Project className={"carousel-item active"} captionClass={"carousel-caption"} img={firstEl.img} title={firstEl.title} link={firstEl.link} height={600} repo={firstEl.repo}/>
        {entries}
        </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    <div className="container-fluid d-flex align-items-center justify-content-evenly" id="cards">
        {cards}
    </div>
    </div>
  )

}

export default ProjectGallery