const qs = require("qs");
const axios = require("axios");

// performs spotify API authentication
const getToken = () => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const auth_token = Buffer.from(
    `${client_id}:${client_secret}`,
    "utf-8"
  ).toString("base64");

  const url = "https://accounts.spotify.com/api/token";
  const headers = {
    Authorization: "Basic " + auth_token,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = qs.stringify({ grant_type: "client_credentials" });

  return axios.post(url, body, { headers: headers }).catch((error) => {
    console.log("error", error.message);
  });
};

// queries spotify for a playlist
const getPlaylist = (token, genre, artist) => {
  const limit = 50; // needs to be set as a function argument, number of rounds?
  let api_playlist_url = "https://api.spotify.com/v1/recommendations?market=CA";
  api_playlist_url += `&limit=${limit}`;
  api_playlist_url += `&seed_genres=${genre}`;
  if (artist !== "") {
    api_playlist_url = `https://api.spotify.com/v1/artists/${artist}/top-tracks?market=CA`;
  }

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return axios.get(api_playlist_url, { headers: header });
};

const filterTitles = (tracks) => {
  return tracks.map((track) => {
    return {
      artist: track.artists.map((artist) => artist.name).join(", "),
      name: track.name,
    };
  });
};

const createAutocomplete = (sampleSonglist, titles) => {
  const autocomplete = [...sampleSonglist, ...titles];
  const output = [...new Set(autocomplete.map((e) => JSON.stringify(e)))].map(
    (e) => JSON.parse(e)
  );
  return output;
};

const queryArtist = (token, searchParam) => {
  const api_artist_url = `https://api.spotify.com/v1/search?q=${searchParam}&type=artist&market=CA&limit=5`;
  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return axios.get(api_artist_url, { headers: header });
};

module.exports = {
  getToken,
  getPlaylist,
  filterTitles,
  createAutocomplete,
  queryArtist,
};
