import React from 'react';
import { store } from 'index';

export default function MessageView(props) {
    const handleDelete = (index) => {
        store.dispatch({ type: 'DELETE_MESSAGE', index: index });
    };

    return (
        props.messages.map((message, index) => (
            <div key={index}>
                {message} <span onClick={() => handleDelete(index)}><i className="fa fa-trash" /></span>
            </div>
        ))
    );
}
