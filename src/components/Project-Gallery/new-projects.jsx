import React from "react";
import Project from "../Project/project";
import projects from "../../projects.json"
import "./new-projects.css"


function NewProject() {
    const newProj = projects[0]
return (
    <>
    <div className="container d-flex justify-content-center align-items-center" id="featured-title">
    <h2>Featured Project</h2>
    </div>
    <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row col-lg-9 col-md-10 col-sm-10" id="main-card">
        <Project key={newProj.id} captionClass={"card-img-overlay"} className={"card"} img={newProj.img} title={newProj.title} link={newProj.link} width={"col-lg-9 col-md-10 col-sm-10"} repo={newProj.repo}/>
        </div>
    </div>
    </>
)

}

export default NewProject