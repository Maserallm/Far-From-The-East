import React, { Fragment } from "react";
import ContactForm from "../../components/Contact Form/ContactForm";
import eazybio from "../../images/eazybio.png";
import eazystate from "../../images/eazystatement0528.png";
// import b5 from "../../images/b5_main_photo.png";
import b5statement from "../../images/b5statement.PNG";
import coldbloodlogo from "../../images/coldbloodLOGO.jpg";
import coldbloodstatement from "../../images/coldbloodstatement.PNG";
// import styles from "./connect.css";
import "./connect.css";

const Connect = () => {
  //   let mailer = {
  //     name: this.state.name,
  //     email: this.state.email,
  //     message: this.state.message
  //   };

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

  // eslint-disable-next-line
  const resize = () => {
    // eslint-disable-next-line
    let reorder = window.innerWidth <= 703;
  };

  return (
    <Fragment>
      <div className="container">
        <div className="header-main">
          <div className="header-main__title">
            <h1>Staff Only</h1>
          </div>

          <div className="about-ffte">
            <p>
              Far From The East has less to do with location but more to do with
              embracing the idea of reaching your goals.
            </p>
          </div>

          <div className="team">
            <div className="team-info">
              <div className="team-members ">
                <figure>
                  <img src={eazybio} alt="EAZY" />
                  <figcaption>
                    <ul className="eazy-media">
                      EAZY | CEO
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
                {window.innerWidth < 704 ? (
                  <Fragment>
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
                    <img src={b5statement} alt="Words from 5" />
                  </Fragment>
                ) : (
                  <Fragment>
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
                  </Fragment>
                )}
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

          <ContactForm />
        </div>
      </div>
    </Fragment>
  );
};

export default Connect;
