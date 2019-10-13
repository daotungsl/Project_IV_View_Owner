import { IAccount } from "../interfaces/web-client/account-wc.interface";

export const API_DOMAIN = 'http://13.77.45.22:8080/';
export const API_IMAGE = 'https://api.cloudinary.com/v1_1/${smileup}/upload';
const TOKEN = 'TOKEN';
export let HTTP_HEADER = {
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem(TOKEN)
};

export let HTTP_HEADER_LOGIN = {
  'Content-Type': 'application/json',
  Authorization: ''
};
export let HTTP_HEADER_CLOUD_DINARY = {
  'X-Requested-With': 'XMLHttpRequest',
};
