import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "8fea9e4313mshff70c89c39b4079p1ab681jsnb8c5b21007a0",
    },
  });
    
  return data;
}