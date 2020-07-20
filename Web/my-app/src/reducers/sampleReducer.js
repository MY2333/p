import { SAMPLE_ACTION_TYPE } from '../actions/types';

export const sampleReducer = (state=2, action) => {
    switch (action.type) {
        case SAMPLE_ACTION_TYPE:
            console.log('Reducer got actions');
            return {
                sampleState: SAMPLE_ACTION_TYPE.sampleState
            };
        default:
            return state;
    }
}