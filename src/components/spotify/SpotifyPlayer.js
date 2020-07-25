import React, { useState } from "react";
import SpotifyWrapper from "./spotifyWrapper";

const s = new SpotifyWrapper("Super Dope Playback");

export default function SpotifyPlayer() {
  const [errorContent, setErrorContent] = useState("");

  function play() {
    s.togglePlay();
  }

  function handleClick() {
    s.getAccessToken();
    s.connect();
  }

  function playPlaylist() {
    s.playTrack();
  }

  function getCurrentTrack() {
    s.getCurrentTrack();
  }

  return (
    <div id="link">
      <div className="error">{errorContent}</div>
      this is the spotify player
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
