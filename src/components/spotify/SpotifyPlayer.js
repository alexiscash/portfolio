import React, { useState, useEffect } from "react";
import SpotifyWrapper from "./spotifyWrapper";

const s = new SpotifyWrapper("Super Dope Playback");

export default function SpotifyPlayer() {
  const [errorContent, setErrorContent] = useState("");
  const [currentTrack, setCurrentTrack] = useState(s.currentTrack);

  useEffect(() => {
    stupidError(setErrorContent);
  }, [errorContent]);

  function play() {
    s.togglePlay();
    setCurrentTrack(s.currentTrack);
  }

  function handleClick() {
    s.getAccessToken();
    s.connect();
    setErrorContent(s.currentTrack);
  }

  function playPlaylist() {
    s.playTrack();
  }

  function getCurrentTrack() {
    s.getCurrentTrack();
  }

  function stupidError(one) {
    // just to silence warnings. not my proudest moment
  }

  return (
    <div id="">
      <div className="error">{errorContent}</div>
      <p>this is the spotify player</p>
      <p>Currently playing: {currentTrack}</p>
      <button onClick={play}>play</button>
      <button onClick={playPlaylist}>play playlist</button>
      <button onClick={getCurrentTrack}>get track</button>
      {/* <div>token: {token}</div> */}
      <div>
        <button onClick={handleClick}>login</button>
      </div>
      <div>
        <iframe
          src="https://open.spotify.com/embed/playlist/1DyAQgCFKWCDn75xzvUpQL"
          width="300"
          height="380"
          frameBorder="0"
          title="super swag"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
