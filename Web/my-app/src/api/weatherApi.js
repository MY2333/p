import axios from 'axios';

export default {
    getWeather: () => {
        return axios.get('https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a97f9aa187acc84f2e13a9ba46dfc714&cat=famous')
        .then( res => res.data.weather[0].description)
        .catch(function(err) {
            throw new Error(err.message)
        })
    },

}