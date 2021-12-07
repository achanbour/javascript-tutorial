import React from 'react';
import { store } from 'index';

import MessageView from 'components/MessageView';
import MessageInput from 'components/MessageInput';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Register the listener to trigger re-rendering on each dispatch call
        store.addListener(() => this.forceUpdate());
    }

    render() {
        const currentState = store.getState();

        return (
            <>
                <MessageView messages={currentState.messages} />
                <MessageInput />
            </>
        );
    }
}
