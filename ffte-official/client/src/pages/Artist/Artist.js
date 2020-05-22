import React, { Component } from "react";
import { Link } from "react-router-dom";
import eazysign from "../../images/eazysignature01.png";
import foreverLink from "../../images/foreverlink01.jpg";
import whynotsnap from "../../images/why not snap.JPG";
// import applemusic from "../../images/apple-music.svg";
import Apple from "../../components/SVG/SVG";
import Spotify from "../../components/SVG/SVG2";
import Youtube from "../../components/SVG/SVG3";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./artist.css";
import "./artist.css";

class Artist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          {/* <!-- Header menu and artist photo --> */}
          <div className="header_main">
            <div className="menu"></div>

            {/* <!-- Header Landing Cover --> */}
            <div className="out_cover">
              <div className="cover">
                <img src={eazysign} alt="Eazy Signature" />
              </div>
            </div>

            {/* <!-- Artist Profile --> */}
            <div className="header_artist_photo">
              <div className="sidebar"></div>
              <div className="header_artist_info">
                <div>
                  <img
                    src="https://woo-videos.s3.us-east-2.amazonaws.com/eazycover.jpeg"
                    alt="EAZY"
                    className="eazy"
                  />
                </div>
                <div className="bio">
                  <h4>EAZY</h4>
                  <p>
                    Looking into the past of Eazy’s musical journey, 2018-2019
                    were promising years for the aspiring artist. From his 2018
                    project, Forever Link, highlighting the loyalty amongst his
                    relationships and surroundings. To his well-established
                    collaboration with fellow Polk County artist, Hard Nard in
                    Why Not Snap. 2019, proved to be a key year for the artist
                    growth.
                    <br />
                    <br />
                    Additionally, B5, Eazy’s business partner, has helped the
                    artist reform the team and each members role, formally
                    creating FFTE. With visions on making the team a
                    corporation. From there on, Eazy linked up with Coldblood a
                    producer from Georgia who has caught the rapper’s eyes with
                    his unique beats. Working with Eazy for years, Coldblood has
                    risen to a valuable position in FFTE as the main producer
                    and the official A&R of the team.
                    <br />
                    <br />
                    Furthermore, with the improved position of FFTE, Eazy is a
                    force to be reckoned with the new release of music coming
                    soon.
                  </p>
                </div>
                <div className="music_content">
                  <div className="music_content_item">
                    <img src={whynotsnap} alt="Why Not Snap" />
                    <div className="track_info">
                      <h2>Why Not Snap</h2>
                      <ul>
                        <li>"1. Crazy Story Remix"</li>
                        <li>"2. To The Ceiling"</li>
                        <li>"3. Big Dawg Assist"</li>
                        <li>"4. Finsway Interlude"</li>
                        <li>"5. Tab Fanmi"</li>
                        <li>"6. 4ever n ever"</li>
                      </ul>
                    </div>
                    <ul className="music_links">
                      <li>
                        <a href="#">
                          <Apple />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Spotify />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/playlist?list=PL30TohooSnj0EbBCXkBX_vDMU-jwFkx3u">
                          <Youtube />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="music_content_item">
                    <img src={foreverLink} alt="Forever Link" width="" />
                    <div className="track_info">
                      <h2>Forever Link</h2>
                      <ul>
                        <li>"1. Live From The 863"</li>
                        <li>"2. Whole Thing"</li>
                        <li>"3. Down The Way / Can't Relate"</li>
                        <li>"4. Boomin"</li>
                        <li>"5. Don't Trust"</li>
                        <li>"6. Big Dawg Link"</li>
                      </ul>
                    </div>
                    <ul className="music_links">
                      <li>
                        <a href="https://music.apple.com/us/album/forever-link-ep/1439140729">
                          <Apple />
                        </a>
                      </li>
                      <li>
                        <a href="https://open.spotify.com/album/3Ua56fWXUnAr83GApoyAa6">
                          <Spotify />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/playlist?list=OLAK5uy_ne0ahSzHrf2V-cn1MFcKLsZOy74MnCwws">
                          <Youtube />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Bottom Page Nav Bar --> */}
          <Navbar />
        </div>
      </React.Fragment>
    );
  }
}

export default Artist;