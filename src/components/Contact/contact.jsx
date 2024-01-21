import React from "react";
import ContactForm from "../ContactForm/contact-form";
import "./contact.css"
import Accordion from 'react-bootstrap/Accordion';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Header from "../Header/header";



function Contact() {


return (
    <div className="container-fluid">
    <Header/>
    <div className="container col-lg-8" >
    <div className="d-flex justify-content-center" id="title">
    <h3>
        Contact me
    </h3>
    </div>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="acc-header">My Contact Links</Accordion.Header>
        <Accordion.Body>
        <h5><a href="https://www.linkedin.com/in/daniela-ciocan-631608267/"><FaLinkedin /> LinkedIn </a></h5>
        <h5><a href="https://github.com/dsciocan"><FaGithub /> GitHub</a></h5>
        <h5><a href="mailto:daniela.ciocan137@gmail.com"><MdMarkEmailRead /> Email</a></h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Or send me a message!</Accordion.Header>
        <Accordion.Body>
        <ContactForm/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </div>
  );
}


export default Contact