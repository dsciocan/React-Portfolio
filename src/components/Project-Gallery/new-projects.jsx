import React from "react";
import Project from "../Project/project";
import projects from "../../projects.json"


function NewProject() {
    const newProj = projects[0]
return (
    <>
    <div className="container d-flex justify-content-center">
    <h3>Featured Project</h3>
    </div>
    <div className="container-fluid d-flex justify-content-center">
        <div className="row col-lg-9">
        <Project key={newProj.id} captionClass={"card-img-overlay"} className={"card"} img={newProj.img} title={newProj.title} link={newProj.link} height={600} width={1200} repo={newProj.repo}/>
        </div>
    </div>
    </>
)

}

export default NewProject