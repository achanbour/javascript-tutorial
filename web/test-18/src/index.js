import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import App from 'components/App';

// The store contains the global state and forwards the dispatched action to the reducer
function createStore(reducer, initialState) {
    let listeners = [];
    let state = initialState;

    const addListener = (listener) => (
        // Add a new listener
        listeners.push(listener)
    );

    const dispatch = (action) => {
        // Dispatch the action to the reducer to update the state
        state = reducer(state, action);
        // Call every listener for each dispatch call
        listeners.forEach(l => l());
    };

    const getState = () => (state);

    return {
        addListener,
        dispatch,
        getState,
    };
}

// The reducer centralizes the logic of the app
function reducer(prevState, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            if (action.text) {
                return {
                    messages: prevState.messages.concat(action.text),
                };
            }
            return prevState;
        case 'DELETE_MESSAGE':
            return {
                messages: [
                    ...prevState.messages.slice(0, action.index),
                    ...prevState.messages.slice(action.index + 1, prevState.messages.length),
                ],
            };
        default:
            return prevState;
    }
}

const store = createStore(reducer, { messages: [] });

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);

export { store };
