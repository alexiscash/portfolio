import React from "react";
import SpotifyWrapper from "./spotifyWrapper";

const s = new SpotifyWrapper("Super Dope Playback");

export default function SpotifyPlayer() {
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
    <div>
      this is the spotify player
      <button onClick={play}>play</button>
      <button onClick={playPlaylist}>play playlist</button>
      <button onClick={getCurrentTrack}>get track</button>
      {/* <div>token: {token}</div> */}
      <div>
        <button onClick={handleClick}>login</button>
      </div>
      <div>
        {/* https://open.spotify.com/playlist/1DyAQgCFKWCDn75xzvUpQL?si=58rFR9rzS0imI4ZdLqtb8A */}
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
