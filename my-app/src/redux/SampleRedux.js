import { sample_action_type } from '../actions/types.jsx'

export const sampleReducer = (state=0, action) => {
    switch (action.type) {
        case sample_action_type:
            return {
                sampleState: action.sampleState
            };
        default:
            return state;
    }
}