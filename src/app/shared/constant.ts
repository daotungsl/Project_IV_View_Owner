import { IAccount } from "../interfaces/web-client/account-wc.interface";

export const API_DOMAIN = 'http://13.77.45.22:8080/';
// export const API_DOMAIN = 'http://localhost:8080/';
export const API_IMAGE = 'https://api.cloudinary.com/v1_1/${smileup}/upload';

const ACCOUNT_TOKEN = 'ACCOUNT_TOKEN';
const STORE_TOKEN = 'STORE_TOKEN';
export let HTTP_HEADER = {
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem(ACCOUNT_TOKEN)
};
export let HTTP_HEADER_STORE = {
  Authorization: localStorage.getItem(STORE_TOKEN)
};


export let HTTP_HEADER_LOGIN = {
  'Content-Type': 'application/json',
  Authorization: ''
};
export let HTTP_HEADER_CLOUD_DINARY = {
  'X-Requested-With': 'XMLHttpRequest',
};
