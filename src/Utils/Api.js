import axios from "axios";

/** Yapilan her istekte gecerli olmasini istedigimiz ayarlari tanimladigimiz bir axios ornegi  */
const api = axios.create({
    baseURL: "https://yt-api.p.rapidapi.com",

    params: {
        geo: 'TR',
        lang: 'tr',
    },
        
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
      }

})

export default api;