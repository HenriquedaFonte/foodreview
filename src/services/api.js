import axios from 'axios';

export const api = axios.create({
  baseURL: "https://foodreview-api.herokuapp.com"
});

