import React, {useRef} from "react"
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "react-bootstrap";
import "./style.css"

function ContactForm() {
        const form = useRef();
        
        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_dw59tv6', 'template_6tkjezw', form.current, '4SrWxRGBGu4LHZHC6')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });

          // Clears the form after sending the email
          e.target.reset();
          const messageDiv = document.getElementById("message");
          messageDiv.classList.remove("hidden")
          setTimeout(()=> {
            messageDiv.classList.add("hidden")
          }, 2000);
          };
          


        return (
          <form ref={form} onSubmit={sendEmail} id="form">
            <div className="form-group">
            <label for="name" >Name</label>
            <input type="text" name="user_name" className="form-control" placeholder="Name"/>
            </div>
            <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" className="form-control" placeholder="Email"/>
            </div>
            <div className="form-group">
            <label>Message</label>
            <textarea name="message" className="form-control" placeholder="Please type your message here"/>
            </div>
            <Button variant="dark" type="submit">Send</Button>
            <div id="message" className="hidden">
              <p>Your message has been sent!</p>
            </div>
          </form>
        );
      };


export default ContactForm;