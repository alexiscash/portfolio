import React from "react";
import LandingPage from "./components/LandingPage";
import SpotifyPlayer from "./components/spotify/SpotifyPlayer";
import NavBar from "./components/NavBar";

const styles = {
  height: "1000px",
};

function App() {
  return (
    <>
      <LandingPage />
      <NavBar />
      <SpotifyPlayer />
      <div style={styles}>ayy lmao</div>
    </>
  );
}

export default App;
