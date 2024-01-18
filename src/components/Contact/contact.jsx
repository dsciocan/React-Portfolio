import React from "react";
import ContactForm from "../ContactForm/contact-form";
import "./contact.css"
import Accordion from 'react-bootstrap/Accordion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";


function Contact() {

    // return(
    //     <div className="container-fluid">
    //         <div className="row">
    //             <h3>
    //                 Contact me
    //             </h3>
    //         </div>
    //         <div className="row">
    //             <h4>My Contact Links</h4>
    //             <a href="https://www.linkedin.com/in/daniela-ciocan-631608267/">LinkedIn</a>
    //             <a href="https://github.com/dsciocan">GitHub</a>
    //             <a href="mailto:daniela.ciocan137@gmail.com">Email</a>
    //         </div>
    //         <div className="row">
    //             <h4>Or send me a message below!</h4>
    //             <ContactForm/>
    //         </div>
    //     </div>
    // )

return (
    <div className="container col-lg-8">
    <div className="row">
    <h3>
        Contact me
    </h3>
    </div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>My Contact Links</Accordion.Header>
        <Accordion.Body>
        <h5><a href="https://www.linkedin.com/in/daniela-ciocan-631608267/"><FaLinkedin /> LinkedIn </a></h5>
        <h5><a href="https://github.com/dsciocan"><FaGithub /> GitHub</a></h5>
        <h5><a href="mailto:daniela.ciocan137@gmail.com"><MdMarkEmailRead /> Email</a></h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Or send me a message below!</Accordion.Header>
        <Accordion.Body>
        <ContactForm/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}


export default Contact