import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://dragon-ball-api.herokuapp.com/api',


});


export default api;
