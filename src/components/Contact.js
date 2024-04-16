import React, { useState, useRef } from 'react';
import "../css/Contact.css";
import emailjs from '@emailjs/browser';
import ilustration from "../assets/img/ilustration.svg";



const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_csv18p5', 'template_futqfae', form.current, {
        publicKey: 'X2VzeWyVZrICt9cEZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
          form.current.reset();
          setTimeout(() => {
            setMessageSent(false);
          }, 3000); // 3000 milisegundos = 3 segundos
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div
        className="container contact"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="image-container">
          <img src={ilustration} alt="contact me" />
        </div>
        <div className="w-100">
          <div className="pb-5">
            <h1>Contact me</h1>
          </div>
          <div className="container">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name"  placeholder="Name" />
              <label>Email</label>
              <input type="email" placeholder="Email" name="user_email" />
              <label>Message</label>
              <textarea name="message" placeholder="Message" />
             
              <button type="submit" value="Send">Send</button>
            </form>
            {messageSent && <p>Message sent!</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;



