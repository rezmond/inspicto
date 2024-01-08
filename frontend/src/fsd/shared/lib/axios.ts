import axios from 'axios';

export const axiosClient = axios.create({
  ...axios.defaults,
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
});

export const axiosServer = axios;
