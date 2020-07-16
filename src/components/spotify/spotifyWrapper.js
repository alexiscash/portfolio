// import { token } from "./secrets";

export default class SpotifyWrapper {
  constructor(name) {
    this.name = name;
    this.device_id = "";
    this.player = {};
    // this.access_token = "";
    this.connect();
  }

  connect() {
    const access_token = localStorage.getItem("spotify_access_token");
    if (access_token && access_token !== "undefined") {
      this.createPlayer();
    } else {
      window.onSpotifyWebPlaybackSDKReady = () => {};
    }
  }

  getAccessToken() {
    const client_id = "dfed05bef549423598ac5ecaebbdd4a7"; // Your client id
    const redirect_uri = "http://localhost:3000"; // Your redirect uri
    // if (
    //   location.hostname === "localhost" ||
    //   location.hostname === "127.0.0.1"
    // ) {
    //   var redirect_uri = "http://localhost:3000";
    // } else {
    //   var redirect_uri = "https://alexisrangel.netlify.app"; // or whatever
    // }
    const state = generateRandomString(16);
    const stateKey = "spotify_auth_state";

    localStorage.setItem(stateKey, state);
    var scope = "streaming user-read-private user-read-email";

    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&state=" + encodeURIComponent(state);

    window.location = url;
    const access_token = getHashParams().access_token;
    this.access_token = access_token;
    console.log(access_token);
    localStorage.setItem("spotify_access_token", access_token);
    // window.location = "http://localhost:3000";
    // return getHashParams().access_token;
  }

  createPlayer() {
    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player = new window.Spotify.Player({
        name: this.name,
        getOAuthToken: (cb) => {
          cb(localStorage.getItem("spotify_access_token"));
        },
      });

      // Error handling
      this.player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });
      this.player.addListener("authentication_error", ({ message }) => {
        console.error(message);
      });
      this.player.addListener("account_error", ({ message }) => {
        console.error(message);
      });
      this.player.addListener("playback_error", ({ message }) => {
        console.error("playback error", message);
      });

      // Playback status updates
      this.player.addListener(
        "player_state_changed",
        ({ position, duration, track_window: { current_track } }) => {
          console.log("Currently Playing", current_track.name);
          // console.log("Position in Song", position);
          // console.log("Duration of Song", duration);
        }
      );

      // Ready
      this.player.addListener("ready", ({ device_id }) => {
        this.device_id = device_id;
        console.log("Ready");
      });

      // Not Ready
      this.player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      // Connect to the player!
      this.player.connect();
      // player.togglePlay();
    };
  }

  togglePlay() {
    this.player.togglePlay();
  }

  getCurrentTrack() {
    this.player.getCurrentState().then((state) => {
      console.log(state);
    });
  }

  async playTrack() {
    const uri = "https://api.spotify.com/v1/";
    const trackId = "2DgdHcjWmO3qd50RzuBLgZ";

    const response = await fetch(uri + trackId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("spotify_access_token")}`,
      },
    });
    console.log(await response.json());
  }

  playDopePlaylist() {
    const playlistURI = "spotify:track:";
    fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${this.device_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            "spotify_access_token"
          )}`,
        },
        body: JSON.stringify({ uris: [playlistURI] }),
      }
    )
      .then((res) => res.json())
      .then(console.log);
  }
}

function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}
