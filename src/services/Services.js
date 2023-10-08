import axios from 'axios';
import {GOOGLE_API_KEY, OPEN_WEATHER_API} from '@env'
export const weatherData = () => {
    return axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=94.04&exclude=current,minutely,hourly,alerts&units=metric&cnt=16&appid=${OPEN_WEATHER_API}`)
}

export const restaurantData = () => {
    return axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.195736&radius=1500&type=restaurant&keyword=cruise&key=${GOOGLE_API_KEY}`)
}