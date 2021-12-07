import { combineReducers } from 'redux';
import counter from 'reducers/counter';

// The state object structure is defined here
const rootReducer = combineReducers({
    count: counter,
});

export default rootReducer;
