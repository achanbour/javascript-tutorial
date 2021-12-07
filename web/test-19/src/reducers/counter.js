// The initial state is initialized on the first call
const initialState = 0;

// The reducer takes the previous state and an action and returns the next state
const counter = (prevState = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return prevState + 1;

        case 'DECREMENT':
            return prevState - 1;

        default:
            return prevState;
    }
};

export default counter;
