import axios from "axios";

const url = "https://floating-fjord-27056.herokuapp.com/songs/";

export const fetchSongs = () => axios.get(url + "getallSongFiles");
export const createSong = (newSong) => axios.post(url + "singleFile", newSong);
export const deleteSong = (id) => axios.delete(`${url + "deleteSong"}/${id}`);
