import { SAMPLE_ACTION_TYPE } from '../actions/types';

export const sampleReducer = (state=0, action) => {
    switch (action.type) {
        case SAMPLE_ACTION_TYPE:
            console.log('Reducer got actions');
            return {
                sampleState: action.sampleState
            };
        default:
            return state;
    }
}