export const API_DOMAIN = 'http://localhost:8080/';
export const API_IMAGE = 'https://api.cloudinary.com/v1_1/${smileup}/upload';
const TOKEN = 'TOKEN';
export let HTTP_HEADER = {
  'Content-Type': 'application/json',
  authorization: localStorage.getItem(TOKEN)
};

export let HTTP_HEADER_LOGIN = {
  'Content-Type': 'application/json',
  authorization: ''
};
export let HTTP_HEADER_CLOUD_DINARY = {
  'X-Requested-With': 'XMLHttpRequest',
};