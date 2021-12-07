const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0,
    },
];

export default function todos(prevState = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...prevState,
                {
                    id: prevState.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    text: action.text,
                    completed: false,
                },
            ];

        case 'EDIT_TODO':
            return prevState.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        text: action.text,
                    };
                }
                return todo;
            });

        case 'DELETE_TODO':
            return prevState.filter((todo) => todo.id !== action.id);

        case 'TOGGLE_TODO_AS_COMPLETED':
            return prevState.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });

        case 'MARK_ALL_AS_COMPLETED':
            return prevState.map((todo) => ({
                ...todo,
                completed: true,
            }));

        case 'CLEAR_COMPLETED_TODOS':
            return (prevState.filter((todo) => !todo.completed));

        default:
            return prevState;
    }
}
