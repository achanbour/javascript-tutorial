import React from 'react';
import PropTypes from 'prop-types';

export default class TodoTextInput extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        onInputSave: PropTypes.func.isRequired,
    };

    static defaultProps = {
        text: '',
    };

    state = {
        text: this.props.text || '',
    };

    handleInputSave = (value) => {
        const text = value.trim();
        if (text) {
            this.props.onInputSave(text);
            this.setState({ text: '' });
        }
    };

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleInputSave(e.target.value);
        }
    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    handleBlur = (e) => {
        this.handleInputSave(e.target.value);
    };

    render() {
        return (
            <input
                type="text"
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}
