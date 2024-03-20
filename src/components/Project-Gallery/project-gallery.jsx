import React from "react"
import Project from "../Project/project"
import projects from "../../projects.json"
import Header from "../Header/header"
import "./project-gallery.css"


import { Carousel } from "react-bootstrap"

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
    <Carousel data-bs-theme="dark" interval={2000}>
      <Carousel.Item>
        <img
          className="d-block"
          src={projects[0].img}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-caption" id="caption">
        <a href={projects[0].link}><h5>{projects[0].title}</h5></a>
        <a href={projects[0].repo}><p>GitHub Repo</p></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={projects[1].img}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-caption" id="caption">
        <a href={projects[1].link}><h5>{projects[1].title}</h5></a>
        <a href={projects[1].repo}><p>GitHub Repo</p></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={projects[2].img}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-caption" id="caption">
        <a href={projects[2].link}><h5>{projects[2].title}</h5></a>
        <a href={projects[2].repo}><p>GitHub Repo</p></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</div>
    <div className="container-fluid d-flex align-items-center justify-content-evenly" id="cards">
        {cards}
    </div>
    </div >
  )

}

export default ProjectGallery