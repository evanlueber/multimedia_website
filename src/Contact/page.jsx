import React from "react";
import Navigation from "../Components/Navigation";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i7jrc64",
        "template_jnxg28s",
        form.current,
        "Bajg88TbrAuaacBDa"
      )
      .then(
        (result) => {
          alert("Nachricht erfolgreich gesendet!");
          form.current.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="page">
      <Navigation />
      <div className="contactTitle">
        <h1>Kontakt</h1>
      </div>
      <div className="contactContentContainer">
        <form className="contactContent" ref={form} onSubmit={sendEmail}>
          <div className="formWithoutSubmit">
            <div className="name_mail">
              <div className="fullInput">
                <label>Name</label>
                <input className="contactInput" type="text" name="user_name" />
              </div>
              <div className="fullInput">
                <label>Email</label>
                <input className="contactInput" type="email" name="user_email" />
              </div>
            </div>
            <div className="message">
              <label>Nachricht</label>
              <textarea className="messageInput" name="message" />
            </div>
          </div>
          <button className="submit" type="submit" value="Send">Senden</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
