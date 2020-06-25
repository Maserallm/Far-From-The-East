import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import eazysign from "../../images/eazysignature01.png";
import foreverLink from "../../images/foreverlink01.jpg";
import whynotsnap from "../../images/why not snap.JPG";
import sumthing2hold from "../../images/sumthing2holdfornow_ep.jpg";
// import applemusic from "../../images/apple-music.svg";
import Apple from "../../components/SVG/SVG";
import Spotify from "../../components/SVG/SVG2";
import Youtube from "../../components/SVG/SVG3";
import artist from "./artist.module.css";
import "./artist.module.css";

const Artist = () => {
  return (
    <Fragment>
      <div>
        {/* <!-- Header menu and artist photo --> */}
        <div className={artist.header_main}>
          {/* <div className="menu"></div> */}

          {/* <!-- Header Landing Cover --> */}
          <div className={artist.out_cover}>
            <div className={artist.cover}>
              <img src={eazysign} alt="Eazy Signature" />
            </div>
          </div>

          {/* <!-- Artist Profile --> */}
          <div className={artist.header_artist_photo}>
            <div className={artist.sidebar}></div>
            <div className={artist.header_artist_info}>
              <div>
                <img
                  src="https://woo-videos.s3.us-east-2.amazonaws.com/eazycover.jpeg"
                  alt="EAZY"
                  className={artist.eazy}
                />
              </div>
              <div className={artist.bio}>
                <h4>EAZY</h4>
                <p>
                  Looking into the past of Eazy’s musical journey, 2018-2019
                  were promising years for the aspiring artist. From his 2018
                  project, Forever Link, highlighting the loyalty amongst his
                  relationships and surroundings. To his well-established
                  collaboration with fellow Polk County artist, Hard Nard in Why
                  Not Snap. 2019, proved to be a key year for the artist growth.
                  <br />
                  <br />
                  Additionally, B5, Eazy’s business partner, has helped the
                  artist reform the team and each members role, formally
                  creating FFTE. With visions on making the team a corporation.
                  From there on, Eazy linked up with Coldblood a producer from
                  Georgia who has caught the rapper’s eyes with his unique
                  beats. Working with Eazy for years, Coldblood has risen to a
                  valuable position in FFTE as the main producer and the
                  official A&R of the team.
                  <br />
                  <br />
                  Furthermore, with the improved position of FFTE, Eazy is a
                  force to be reckoned with the new release of music coming
                  soon.
                </p>
              </div>
              <div className={artist.music_content}>
                <div className={artist.music_content_item}>
                  <img src={sumthing2hold} alt="Sumthing 2 Hold For Now" />
                  <ul className={artist.music_links}>
                    <li>
                      <a
                        href="https://music.apple.com/us/album/forever-link-ep/1439140729"
                        target="_blank"
                        rel="noopener noreferrer" // eslint-disable-next-line
                      >
                        {/* eslint-disable-next-line*/}
                        <Apple />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://open.spotify.com/album/3Ua56fWXUnAr83GApoyAa6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Spotify />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=OLAK5uy_ne0ahSzHrf2V-cn1MFcKLsZOy74MnCwws"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={artist.music_content_item}>
                  <img src={whynotsnap} alt="Why Not Snap" />
                  <ul className={artist.music_links}>
                    <li id="why_not_link">
                      <a
                        href="https://www.youtube.com/playlist?list=PL30TohooSnj0EbBCXkBX_vDMU-jwFkx3u"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={artist.music_content_item}>
                  <img src={foreverLink} alt="Forever Link" width="" />
                  <ul className={artist.music_links}>
                    <li>
                      <a
                        href="https://music.apple.com/us/album/forever-link-ep/1439140729"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Apple />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://open.spotify.com/album/3Ua56fWXUnAr83GApoyAa6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Spotify />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/playlist?list=OLAK5uy_ne0ahSzHrf2V-cn1MFcKLsZOy74MnCwws"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Artist;
