import { sample_action_type } from './types.jsx';

export const sampleAction = (payload) => {
    dispatchEvent(count_increase(payload));
}

export const count_increase = (payload) => {
    return {
        type: sample_action_type,
        sampleState: payload
    }
}