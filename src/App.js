import React from "react";
import LandingPage from "./components/LandingPage";
import SpotifyPlayer from "./components/spotify/SpotifyPlayer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <LandingPage />
      <NavBar />
      <SpotifyPlayer />
      <div style={{ height: "1000px" }}>ayy lmao</div>
    </>
  );
}

export default App;
