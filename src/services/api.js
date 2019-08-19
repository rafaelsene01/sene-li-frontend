import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sene.space',
});

export default api;
