import React from "react"
import Project from "../Project/project"
import projects from "../../projects.json"
import Header from "../Header/header"

function ProjectGallery() {

    const carousel = projects.filter((project) => 1<project.id && project.id<4)
    const firstEl = projects[0]
    console.log(carousel)
    const entries = carousel.map((element) => <Project key={element.id} captionClass={"carousel-caption"} className={"carousel-item"} img={element.img} title={element.title} link={element.link} height={600} repo={element.repo}/>)
    console.log(entries)
    const cardsEl = projects.filter((project) => project.id>=4);
    const cards = cardsEl.map((el) => 
        <Project key={el.id} captionClass={"card-img-overlay"} className={"card bg-dark"} img={el.img} title={el.title} link={el.link} height={400} width={550} repo={el.repo}/>
    )

    return (
    <div className="container-fluid">
    <Header/>
    <div className="row" id="project-title">
        <h2>My Projects</h2>
    </div>
    <div className="container-fluid d-flex align-items-center justify-content-center">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"> 
        <div className="carousel-inner">
        <Project className={"carousel-item active"} captionClass={"carousel-caption"} img={firstEl.img} title={firstEl.title} link={firstEl.link} height={600} repo={firstEl.repo}/>
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
    <div className="row">
    <div className="container-fluid d-flex align-items-center justify-content-evenly">
        {cards}
    </div>
    </div>
    </div>
  )

}

export default ProjectGallery