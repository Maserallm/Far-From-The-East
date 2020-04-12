import React, { Component } from "react";
import ffteLogo from "../images/ffte-logo.svg";
import "./home.css";
import fftegoldpromo from "../images/fftegoldpromo.mp4";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-wrap">
          <div className="full-screen-wrap">
            <video id="vid-2" autoPlay={true} loop={true} muted>
              <source type="video/mp4" src={fftegoldpromo} />
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
              {/* <defs>
            <style>
              .cls-1 {
                font-size: 662.98px;
                font-family: Impact;
              }
              .cls-2 {
                letter-spacing: 0.03em;
              }
              .cls-3 {
                letter-spacing: 0em;
              }
              .cls-4 {
                font-size: 92.06px;
                font-family: SANTOSDUMONT, SANTOS DUMONT;
              }
              .cls-5 {
                letter-spacing: 0.03em;
              }
              .cls-6 {
                letter-spacing: 0em;
              }
              .cls-7 {
                letter-spacing: -0.14em;
              }
              .cls-8 {
                letter-spacing: 0.06em;
              }
              .cls-9 {
                letter-spacing: 0.03em;
              }
              .cls-10 {
                letter-spacing: -0.14em;
              }
              .cls-11 {
                letter-spacing: 0.01em;
              }
              .cls-12 {
                letter-spacing: -0.08em;
              }
              .cls-13 {
                letter-spacing: 0.12em;
              }
            </style>
          </defs> */}
              <g className="transparent-text">
                <text
                  className="cls-1"
                  id="heading"
                  transform="translate(417.31 593.69) scale(0.96 1)"
                >
                  <a href="#artist" className="artist">
                    <tspan>F</tspan>
                  </a>
                  <a href="#shop" className="shop">
                    <tspan className="cls-2" x="263.83" y="0">
                      F
                    </tspan>
                  </a>
                  <a href="http://ffteblog.com/" className="blog">
                    <tspan className="cls-3" x="548.24" y="0">
                      T
                    </tspan>
                  </a>
                  <a href="#connect" className="connect">
                    <tspan className="cls-3" x="850.24" y="0">
                      E
                    </tspan>
                  </a>
                </text>
                <a href="#artist" className="artist">
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
                </a>
                <a href="#shop" className="shop">
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
                </a>
                <a href="http://ffteblog.com/" className="blog">
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
                <a href="#contact" className="contact">
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
                </a>
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
      </React.Fragment>
    );
  }
}

export default Home;
