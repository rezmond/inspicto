import axios from 'axios';

export const axiosClient = axios;
export const axiosServer = axios.create({
  ...axios.defaults,
  baseURL: process.env.API_HOST,
});
