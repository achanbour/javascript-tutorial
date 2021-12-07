import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from 'components/TodoItem';
import TodoTextInput from './TodoTextInput';
import styles from './TodoList.module.scss';

export default class TodoList extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
        actions: PropTypes.shape({
            addTodo: PropTypes.func.isRequired,
            markAllAsCompleted: PropTypes.func.isRequired,
            clearCompletedTodos: PropTypes.func.isRequired,
        }).isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        // Retrieves the current state and the action dispatchers from the props
        const { todos, actions } = this.props;

        return (
            <>
                <label>Add a new item and hit Enter to save:</label>
                <TodoTextInput
                    onInputSave={(text) => actions.addTodo(text)}
                />
                <button onClick={() => actions.markAllAsCompleted()}>
                    Mark all as completed
                </button>
                <button onClick={() => actions.clearCompletedTodos()}>
                    Clear completed
                </button>
                <ul className={styles.todoList}>
                    {todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                    ))}
                </ul>
                <p>Note: double-click an item to toggle the edit form.</p>
            </>
        );
    }
}
