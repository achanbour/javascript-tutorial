export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
});

export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    id: id,
    text: text,
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id: id,
});

export const toggleTodoAsCompleted = (id) => ({
    type: 'TOGGLE_TODO_AS_COMPLETED',
    id: id,
});

export const markAllAsCompleted = () => ({
    type: 'MARK_ALL_AS_COMPLETED',
});

export const clearCompletedTodos = () => ({
    type: 'CLEAR_COMPLETED_TODOS',
});
