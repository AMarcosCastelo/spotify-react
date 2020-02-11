import axios from 'axios';

const api = axios.create({
  baseURL: 'https://accounts.spotify.com/api'
});

export default api;
