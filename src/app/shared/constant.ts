export const API_DOMAIN = 'http://localhost:8080/';
const TOKEN = 'TOKEN';
export let HTTP_HEADER = {
  'Content-Type': 'application/json',
  authorization: localStorage.getItem(TOKEN)
};

export let HTTP_HEADER_LOGIN = {
  'Content-Type': 'application/json',
  authorization: ''
};
