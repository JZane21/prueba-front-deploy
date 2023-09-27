import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_URL;
console.log(BASE_URL);
export const baseApi = axios.create({
  baseURL: BASE_URL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
});
