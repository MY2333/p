import {SAMPLE_ACTION_TYPE} from './types';
import getWeatherApi from '../api/getWeatherApi';

export const weather = (payload) => {
    return {
        type: SAMPLE_ACTION_TYPE,
        sampleState: payload
    }
}

export const sampleAction = () => (dispatch) => {

    getWeatherApi.getWeather()
        .then((res) => {
            dispatch(weather(res));
        })
        .catch((err) => {
            console.log(err);
        })
    
    console.log('Action Creater Called');

};