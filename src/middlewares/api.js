import axios from 'axios';

const api = axios.create({
  baseURL: 'http://nicolaslenne-server.eddi.cloud/projet-Mug-Overflow-back/public/api',
});

if(localStorage.getItem('token')) (
  api.defaults.headers.common.Authorization = `bearer ${localStorage.getItem('token')}`
)

export default api;
