import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ContactFrom from "../../components/Contact Form/ContactForm";
import eazybio from "../../images/eazybio.png";
import coldbloodlogo from "../../images/coldbloodLOGO.jpg";
import styles from "./connect.css";
import "./connect.css";

class Connect extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    buttonText: "Send Message",
    sent: false,
    result: "",
    error: ""
  };

  formSubmit = e => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending"
    });

    let mailer = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
  };

  //   API.send({ mailer })
  //     .then(res => {
  //       if (res.data.message) {
  //         this.setState(
  //           { sent: true, result: res.data.message },
  //           this.resetForm()
  //         );
  //       } else {
  //         this.setState({ error: "Message did not send." });
  //       }
  //     })
  //     .catch(() => {
  //       console.log("Message not sent");
  //     });
  // };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className="header-main">
            <div className="header-main__title">
              <h1>Staff Only</h1>
            </div>

            <div className="about-ffte">
              <p>
                Far From The East has less to do with location but more to do
                with embracing the idea of reaching your goals.
              </p>
            </div>

            <div className="team">
              <div></div>
              <div className="team-info">
                <div className="team-members ">
                  <figure>
                    <img src={eazybio} alt="EAZY" />
                    <figcaption>
                      <ul className="eazy-media">
                        <p>EAZY | CEO</p>

                        <li>
                          <a
                            href="https://www.instagram.com/rcfit7/?hl=en"
                            className="text-dark"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/rcfit7/?hl=en"
                            className="text-dark"
                          >
                            <i class="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/rcfit7/?hl=en"
                            className="text-dark"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Officia molestias eaque quisquam assumenda perferendis
                    blanditiis aliquid minima necessitatibus cumque dignissimos.
                  </p>
                </div>
                <div className="team-members ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Enim reprehenderit cupiditate praesentium quae, fuga quod
                    numquam suscipit accusantium? Quis, natus!
                  </p>
                  <figure>
                    <img
                      src="https://woo-videos.s3.us-east-2.amazonaws.com/FFTE+ORIGINALS+B5+01.png"
                      alt="B5"
                      width="100%"
                      height=""
                    />
                    <figcaption>
                      <ul className="eazy-media">
                        B5 | CEO
                        <li>
                          <a
                            href="https://www.instagram.com/rcfit7/?hl=en"
                            className="text-dark"
                          ></a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/rcfit7/?hl=en"
                            className="text-dark"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/rcfit7/?hl=en"
                            className="text-dark"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                </div>

                <div className="team-members ">
                  <figure>
                    <img
                      // src={coldbloodlogo}
                      src="https://s3.amazonaws.com/beatstarsdata/proweb/2.0/user-styles/uploads/184598/footer_logo.png?_=1553916275"
                      alt="ColdBlood"
                      width="100%"
                      height=""
                    />
                    <figcaption>
                      <ul className="eazy-media">
                        ColdBlood | Producer, A&R
                        <li className="cold-media">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/ColdBloodBeats/"
                            className="text-dark"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li className="cold-media">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/ColdBloodBeats"
                            className="text-dark"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="cold-media">
                          <a
                            href="https://coldbloodbeats.com/"
                            className="text-dark"
                          >
                            <i class="fas fa-store"></i>
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Enim reprehenderit cupiditate praesentium quae, fuga quod
                    numquam suscipit accusantium? Quis, natus!
                  </p>
                </div>
              </div>
            </div>

            <ContactFrom />
            {/* <div className="contact-ffte">
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
                    <button
                      type="submit"
                      className="button button-primary ibSQGl"
                    >
                      {this.state.buttonText}
                    </button>
                    {this.state.result ? (
                      <small>{this.state.result}</small>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              </div>
            </div> */}

            {/* <!-- Bottom Page Nav Bar --> */}
            <Navbar />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Connect;
