import * as redux from 'redux';
import {sampleReducer} from '../reducers/sampleReducer';
import thunk from 'redux-thunk';

export const configure = () => {
    const reducer = () => redux.combineReducers({
        sampleReducer: sampleReducer,
    });

    const store = redux.createStore(reducer(), redux.applyMiddleware(thunk));
    return store;
}