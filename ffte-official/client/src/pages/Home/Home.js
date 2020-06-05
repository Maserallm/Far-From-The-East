import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ffteLogo from "../images/ffte-logo.svg";
// import styles from "./home.css";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {window.location.pathname === "/" ? (
          <div
            className="header_wrap"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div className="full_screen_wrap">
              <video
                className="vid-2"
                autoPlay={true}
                loop={true}
                playsInline
                muted
                style={{
                  width: "70vw",
                  height: "108vh",
                  overflow: "hidden",
                  marginLeft: "14%"
                }}
              >
                <source
                  type="video/mp4"
                  src="https://woo-videos.s3.us-east-2.amazonaws.com/ffteintro.mov"
                />
              </video>
            </div>

            <div className="ffte">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1920 812.85"
              >
                <g className="header-backdrop" mask="url(#header-mask)">
                  <rect
                    id="cover"
                    x="-5%"
                    y="-5%"
                    width="110%"
                    height="110%"
                    style={{ fill: "white" }}
                  />
                </g>
                <g className="transparent-text">
                  <text
                    className="cls-1"
                    id="heading"
                    transform="translate(417.31 593.69) scale(0.96 1)"
                  >
                    <Link className="artist zoom" to="/artist">
                      <tspan>F</tspan>
                    </Link>
                    {/* <g>
                  <text
                    className="cls-1 zoom"
                    id="heading"
                    transform="translate(417.31 593.69) scale(0.96 1)"
                  > */}
                    <Link className="shop hvr-grow" to="/shop">
                      <tspan className="cls-2" x="263.83" y="0">
                        F
                      </tspan>
                    </Link>
                    {/* </text>
                </g> */}
                    <a href="http://ffteblog.com/" className="blog hvr-grow">
                      <tspan className="cls-3" x="548.24" y="0">
                        T
                      </tspan>
                    </a>
                    <Link className="contact hvr-grow" to="/connect">
                      <tspan className="cls-3" x="850.24" y="0">
                        E
                      </tspan>
                    </Link>
                  </text>
                  <Link className="artist hvr-grow" to="/artist">
                    <text
                      className="cls-4"
                      transform="translate(460.35 706.24) scale(0.96 1)"
                      id="far"
                    >
                      F
                      <tspan className="cls-5" x="52.29" y="0">
                        a
                      </tspan>
                      <tspan className="cls-6" x="86.9" y="0">
                        r
                      </tspan>
                    </text>
                  </Link>
                  <Link className="shop hvr-grow " to="/shop">
                    <text
                      className="cls-4"
                      transform="translate(717.38 705.91) scale(0.96 1)"
                      id="from"
                    >
                      <tspan className="cls-7">F</tspan>
                      <tspan className="cls-8" x="39.31" y="0">
                        r
                      </tspan>
                      <tspan className="cls-9" x="67.29" y="0">
                        o
                      </tspan>
                      <tspan x="85.89" y="0">
                        m
                      </tspan>
                    </text>
                  </Link>
                  <a href="http://ffteblog.com/" className="blog hvr-grow">
                    <text
                      className="cls-4"
                      transform="translate(1023.71 705.91) scale(0.96 1)"
                      id="the"
                    >
                      <tspan className="cls-10">T</tspan>
                      <tspan className="cls-11" x="50.28" y="0">
                        h
                      </tspan>
                      <tspan x="73.8" y="0">
                        e
                      </tspan>
                    </text>
                  </a>
                  <Link className="contact hvr-grow" to="/connect">
                    <text
                      className="cls-4"
                      transform="translate(1291.5 705.91) scale(0.96 1)"
                      id="east"
                    >
                      E
                      <tspan className="cls-12" x="50.63" y="0">
                        a
                      </tspan>
                      <tspan className="cls-13" x="75.49" y="0">
                        s
                      </tspan>
                      <tspan x="119.95" y="0">
                        t
                      </tspan>
                    </text>
                  </Link>
                </g>
                <mask id="header-mask">
                  <use href="#cover" style={{ fill: "white" }} />
                  6
                  <use href="#heading" />
                  <use href="#far" />
                  <use href="#from" />
                  <use href="#the" />
                  <use href="#east" />
                </mask>
              </svg>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Home;
