import React, { useState } from "react";

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

  const formSubmit = e => {
    e.preventDefault();
    setContact({ sent: true, name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-ffte">
      <p>CONNECT WITH US HERE:</p>
      <div className="social-media"></div>
      <div className="contact-form">
        {/* <form
          className="contact-form cust-form"
          onSubmit={formSubmit}
          method="POST"
          action="send"
        >
          <div className="user_info">
            <div>
              <label className="message-name" htmlFor="message-name"></label>
              <input
                onChange={e => setName(e.target.value)}
                name="name"
                className="message-name cpYcEZ border-bottom"
                type="text"
                placeholder="YOUR NAME"
                value={name}
              />
            </div>

            <div>
              <label className="message-email" htmlFor="message-email"></label>
              <input
                onChange={e => setEmail(e.target.value)}
                name="email"
                className="message-email cpYcEZ border-bottom"
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                value={email}
              />
            </div>
          </div>

          <div>
            <label
              className="message-subject"
              htmlFor="message-subject"
            ></label>
            <input
              onChange={e => setSubject(e.target.value)}
              name="subject"
              className="message-subject cpYcEZ border-bottom"
              type="subject"
              placeholder="SUBJECT"
              required
              value={subject}
            />
          </div>

          <div>
            <label className="message" htmlFor="message-input"></label>
            <textarea
              onChange={e => setMessage(e.target.value)}
              cols="20"
              rows="10"
              name="message"
              className="message-input eJFNDT border-bottom"
              type="text"
              placeholder="MESSAGE"
              value={message}
              required
            />
          </div>

          <div className="button-container">
            <button type="submit" className="button button-primary ibSQGl">
              {button}
            </button>
            {result ? <small>{result}</small> : ""}
          </div>
        </form> */}

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

          <textarea
            onChange={onChange}
            value={message}
            name="message"
            rows="10"
            cols="68"
          ></textarea>

          <button type="submit" className="btn">
            {sent === false ? "Send" : "Sending Message!"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
