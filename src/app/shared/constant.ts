export const API_DOMAIN = 'https://localhost:44346/';
const TOKEN = 'TOKEN';
export let HTTP_HEADER = {
  'Content-Type': 'application/json',
  authorization: localStorage.getItem(TOKEN)
};

export let HTTP_HEADER_LOGIN = {
  'Content-Type': 'application/json',
  authorization: ''
};
