// import React, { useEffect, useRef } from "react";
import React, { useState } from "react";
import SpotifyWrapper from "./spotify";
import { token } from "./secrets";

const s = new SpotifyWrapper(token);

export default function SpotifyPlayer() {
  const [count, setCount] = useState(0);

  function play() {
    s.togglePlay();
  }

  function incrementCount() {
    // setCount(prevCount => prevCount + 1);
    setCount(count + 1);
  }

  return (
    <div>
      this is the spotify player
      <button onClick={play}>play</button>
      <button onClick={incrementCount}> + </button>
      <span>{count}</span>
    </div>
  );
}
