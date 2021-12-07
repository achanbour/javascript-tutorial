import { combineReducers } from 'redux';
import todos from 'reducers/todos';

// The state object structure is defined here
const rootReducer = combineReducers({
    todos: todos,
});

export default rootReducer;
