import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
export const baseApi = axios.create({
  baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
});