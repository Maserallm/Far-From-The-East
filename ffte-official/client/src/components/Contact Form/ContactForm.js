import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    sent: false
  });

  const { name, email, subject, message, sent } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const formSubmit = async e => {
    e.preventDefault();
    // eslint-disable-next-line
    const form = await axios.post("/api/form", {
      name,
      email,
      subject,
      message
    });

    setContact({ sent: true });
    resetForm();
  };

  const resetForm = () => {
    setContact({ sent: false, name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-ffte">
      <p>CONNECT WITH US HERE:</p>
      {/* <div className="social-media"></div> */}
      <div className="contact-form">
        <form
          onSubmit={formSubmit}
          action="/send"
          method="post"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <div className="input-container">
            <i className="fa fa-user icon"></i>
            <input
              onChange={onChange}
              className="input-field"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-envelope icon"></i>
            <input
              onChange={onChange}
              className="input-field"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
            />
          </div>

          <div className="input-container">
            <i className="fa fa-inbox icon"></i>
            <input
              onChange={onChange}
              className="input-field"
              type="subject"
              placeholder="Subject"
              name="subject"
              value={subject}
            />
          </div>

          <div className="input-container">
            <textarea
              onChange={onChange}
              value={message}
              name="message"
              rows="10"
              cols="68"
            ></textarea>
          </div>

          <button type="submit" className="btn">
            {sent === false ? "Send" : "Sending Message!"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
