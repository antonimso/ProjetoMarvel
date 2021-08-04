// eslint-disable-next-line
import axios from 'axios';
/* eslint-disable */
const urlBaseMarvel = 'https://gateway.marvel.com:443/v1/public/comics?apikey=';
const apiKey = '';

export default {
  getAllComics: (limit, callback) => {
    const urlComics = 'https://gateway.marvel.com/v1/public/comics?ts=1&apikey=keyPrivada+keyPublica+hashDasDuas';
    axios.get(urlComics).then((comics) => {
      if (callback) {
        callback(comics)
      }
    })
  }
}
