import * as redux from 'redux';
import {SampleRedux} from '../redux/SampleRedux';

export const configur = () => {
    const reducer = () => redux.combineReducers({
        sampleReducer = sampleReducer,
    });

    const store = redux.createStore(reducer());
    return store;
}