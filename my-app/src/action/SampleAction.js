import { SAMPLE_ACTION_TYPE } from './types'
import weatherApi from '../api/weatherApi';
//The Action
export const weatherUpdate = (payload) => {
    return {
        type: SAMPLE_ACTION_TYPE,
        sampleState: payload
    }
}

//The Action Creator
export const sampleAction = () => (dispatch) => {

    weatherApi
      .getWeather()
      .then((res) => {
        dispatch(weatherUpdate(res));
      })
      .catch((err) => {
        console.log(err);
      });

    console.log('Action Creater Called');
};

