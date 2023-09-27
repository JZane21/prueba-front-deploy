import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL;
export const baseApi = axios.create({
  baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
});