import React, { Fragment } from "react";

export default function StaffCard({
  eazybio,
  eazystate,
  b5statement,
  coldbloodlogo,
  coldbloodstatement
}) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
