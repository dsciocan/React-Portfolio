import React, {useRef} from "react"
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
          };
          


        return (
          <form ref={form} onSubmit={sendEmail}>
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
            <input type="submit" value="Send"/>
          </form>
        );
      };


export default ContactForm;