import React from "react";

function ContactForm({
  formSubmit,
  onChange,
  name,
  email,
  subject,
  message,
  button,
  result
}) {
  return (
    <div className="contact-ffte">
      <p>CONNECT WITH US HERE:</p>
      <div className="social-media"></div>
      <div className="contact-from">
        <form
          className="contact-form cust-form"
          onSubmit={formSubmit}
          method="POST"
          action="send"
        >
          <div className="user_info">
            <div>
              <label className="message-name" htmlFor="message-name"></label>
              <input
                onChange={onChange}
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
                onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
