import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ContactFrom from "../../components/Contact Form/ContactForm";
import eazybio from "../../images/eazybio.png";
import eazystate from "../../images/eazystatement01.PNG";
// import b5 from "../../images/b5_main_photo.png";
import b5statement from "../../images/b5statement.PNG";
import coldbloodlogo from "../../images/coldbloodLOGO.jpg";
import coldbloodstatement from "../../images/coldbloodstatement.PNG";
import styles from "./connect.css";
import "./connect.css";

class Connect extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    subject: "",
    buttonText: "Send Message",
    sent: false,
    result: "",
    error: ""
  };

  onChange = e => {
    // const target = e.target;
    // const value = target.value;
    // const nom = target.name;

    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    this.setState({
      buttonText: "...sending"
    });

    //   let mailer = {
    //     name: this.state.name,
    //     email: this.state.email,
    //     message: this.state.message
    //   };
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
                            href="https://www.instagram.com/eazyffte/?hl=en"
                            className="text-dark"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/channel/UCk6xUPzFEHY6TkigqCL-5Iw"
                            className="text-dark"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/Eazy_FFTE"
                            className="text-dark"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                  <img src={eazystate} alt="Eazy Statement" />
                </div>
                <div className="team-members ">
                  <img src={b5statement} alt="Words from 5" />
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
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://instagram.com/b5_ffte?igshid=1xkr25zidzsyp"
                            className="text-dark"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:B5ffte@gmail.com"
                            className="text-dark"
                          >
                            <i className="fas fa-envelope"></i>
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
                      src={coldbloodlogo}
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
                            <i className="fas fa-store"></i>
                          </a>
                        </li>
                      </ul>
                    </figcaption>
                  </figure>
                  <img src={coldbloodstatement} alt="col blood statement" />
                </div>
              </div>
            </div>

            <ContactFrom
              name={this.state.name}
              email={this.state.email}
              message={this.state.message}
              button={this.state.buttonText}
              subject={this.state.subject}
              result={this.state.result}
              formSubmit={this.formSubmit}
              onChange={this.onChange}
            />

            {/* <!-- Bottom Page Nav Bar --> */}
            <Navbar />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Connect;
