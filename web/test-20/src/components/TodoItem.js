import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TodoTextInput from 'components/TodoTextInput';
import styles from './TodoItem.module.scss';

export default class TodoItem extends React.Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        toggleTodoAsCompleted: PropTypes.func.isRequired,
    };

    state = {
        editing: false,
    };

    handleDoubleClick = () => {
        this.setState({ editing: true });
    };

    handleEditTodo = (id, text) => {
        if (text.length === 0) {
            this.props.deleteTodo(id);
        } else {
            this.props.editTodo(id, text);
        }
        this.setState({ editing: false });
    };

    render() {
        const { todo, toggleTodoAsCompleted, deleteTodo } = this.props;

        if (this.state.editing) {
            return (
                <li>
                    <TodoTextInput
                        text={todo.text}
                        onInputSave={(text) => this.handleEditTodo(todo.id, text)}
                    />
                </li>
            );
        }

        return (
            <li>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodoAsCompleted(todo.id)}
                />
                <label
                    className={classNames({ [styles.isCompleted]: todo.completed })}
                    onDoubleClick={this.handleDoubleClick}
                >
                    {todo.text}
                </label>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
        );
    }
}
