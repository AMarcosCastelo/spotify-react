import axios from 'axios';

// const apiAccount = axios.create({
//   baseURL: 'https://accounts.spotify.com/api'
// });

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1'
});

export default api;
