import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from 'reducers';
import VisibleTodoList from 'containers/VisibleTodoList';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <VisibleTodoList />
    </Provider>,
    document.getElementById('root'),
);
