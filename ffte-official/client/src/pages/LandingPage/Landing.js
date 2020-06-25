import React from "react";
import YouTube from "react-youtube";
import landStyles from "./landing.module.css";

const Landing = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const opts1 = {
    height: "280",
    width: "375",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const onReady = event => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div className={landStyles.yt_landing}>
      {window.innerWidth < 769 ? (
        <YouTube
          opts={opts1}
          videoId="xsyJkuGfG5g"
          onReady={onReady}
          className={landStyles.yt_land_playermb}
        />
      ) : (
        <YouTube
          opts={opts}
          videoId="xsyJkuGfG5g"
          onReady={onReady}
          className={landStyles.yt_land_player}
        />
      )}
    </div>
  );
};

export default Landing;
