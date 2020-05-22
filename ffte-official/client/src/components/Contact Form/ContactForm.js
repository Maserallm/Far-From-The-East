import React from "react";

exports.default = function ContactForm() {
  return (
    <div className="contact-ffte">
      <p>CONNECT WITH US HERE:</p>
      <div className="social-media"></div>
      <div className="contact-from">
        <form
          className="contact-form cust-form"
          onSubmit={e => this.formSubmit(e)}
          method="POST"
          action="send"
        >
          <div>
            <label className="message-name" htmlFor="message-name">
              Your Name
            </label>
            <input
              onChange={e => this.setState({ name: e.target.value })}
              name="name"
              className="message-name cpYcEZ border-bottom"
              type="text"
              placeholder="Your Name"
              value={this.state.name}
            />
          </div>

          <div>
            <label className="message-email" htmlFor="message-email">
              Your Email
            </label>
            <input
              onChange={e => this.setState({ email: e.target.value })}
              name="email"
              className="message-email cpYcEZ border-bottom"
              type="email"
              placeholder="your@email.com"
              required
              value={this.state.email}
            />
          </div>

          <div>
            <label className="message" htmlFor="message-input">
              Your Message
            </label>
            <textarea
              onChange={e => this.setState({ message: e.target.value })}
              cols="20"
              rows="10"
              name="message"
              className="message-input eJFNDT border-bottom"
              type="text"
              placeholder="Please write your message here"
              value={this.state.message}
              required
            />
          </div>

          <div className="button-container">
            <button type="submit" className="button button-primary ibSQGl">
              {this.state.buttonText}
            </button>
            {this.state.result ? <small>{this.state.result}</small> : ""}
          </div>
        </form>
      </div>
    </div>
  );
};
