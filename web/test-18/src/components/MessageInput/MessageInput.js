import React from 'react';
import { store } from 'index';

export default class MessageInput extends React.Component {
    state = {
        value: '',
    };

    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleSubmit = () => {
        store.dispatch({ type: 'ADD_MESSAGE', text: this.state.value });
        this.setState({ value: '' });
    };

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <button onClick={this.handleSubmit}>
                    Add message
                </button>
            </>
        );
    }
}
