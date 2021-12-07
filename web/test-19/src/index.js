import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from 'reducers';
import Counter from 'components/Counter';

// The Redux store object
const store = createStore(rootReducer);

// The render function will be registered as listener and will be re-called if an action is dispatched
function render() {
    ReactDOM.render(
        <Counter
            value={store.getState().count}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById('root'),
    );
}

render();
store.subscribe(render);
