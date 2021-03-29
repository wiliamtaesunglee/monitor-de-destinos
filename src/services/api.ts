import axios from 'axios';

const api = axios.create({
  baseURL: '//api.monitorsmiles.com.br/',
});

export default api;
