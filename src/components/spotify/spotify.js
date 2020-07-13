import { token } from "./secrets";

export default class SpotifyWrapper {
  constructor(token) {
    this.token = token;
    this.connect();
  }

  connect() {
    if (!this.player) {
      this.createPlayer();
    }
  }

  createPlayer() {
    console.log("connecting to spotify");

    window.onSpotifyWebPlaybackSDKReady = () => {
      this.player = new window.Spotify.Player({
        name: "Super Dope Playback",
        getOAuthToken: (cb) => {
          cb(this.token);
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
      // player.addListener("player_state_changed", (state) => {
      //   console.log(state);
      // });

      // Ready
      this.player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
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
}

export function connect() {
  console.log("connecting to spotify");

  window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new window.Spotify.Player({
      name: "Super Dope Playback",
      getOAuthToken: (cb) => {
        cb(token);
      },
    });

    // Error handling
    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    player.addListener("playback_error", ({ message }) => {
      console.error(message);
    });

    // Playback status updates
    // player.addListener("player_state_changed", (state) => {
    //   console.log(state);
    // });

    // Ready
    player.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
    });

    // Not Ready
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    // Connect to the player!
    player.connect();
    // player.togglePlay();
  };
}
