'use strict';

// To simulate an API call
function fetchFriends() {
    return new Promise(function (resolve, reject) {
        // Array of friends
        const friends = ['Adam', 'Edwy', 'Ivan'];

        // Resolve the promise in two seconds
        setTimeout(() => {
            resolve(friends);
        }, 2000);
    });
}

// Stateless functional component
function RemoveButton(props) {
    // Function definition remains accessible within the closure
    const handleRemoveClick = () => {
        props.onRemoveFriend(props.name);
    };

    return (
        <button onClick={handleRemoveClick}>
            Remove <i className="fa fa-trash" />
        </button>
    );
}

class EditButton extends React.Component {
    // Set the state as a public field
    state = {
        isEditable: false,
        inputValue: this.props.name,
    };

    constructor(props) {
        super(props);

        // Bindings
        this.handleInput = this.handleInput.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSetEditableClick = this.handleSetEditableClick.bind(this);
    }

    handleInput(e) {
        // Retrieves the input value from the event before the event pooling
        const value = e.target.value;

        // Cannot access the event object inside an async callback because React does event pooling
        this.setState({ inputValue: value });
    }

    handleEditClick() {
        if (this.state.inputValue && this.state.inputValue !== this.props.name) {
            this.props.onEditFriend(this.props.name, this.state.inputValue);
        }
        this.handleSetEditableClick();
    }

    handleSetEditableClick() {
        // Enqueues changes and triggers a render call
        this.setState((currentState) => ({
            isEditable: !currentState.isEditable,
            inputValue: this.props.name,
        }));
    }

    render() {
        if (this.state.isEditable) {
            return (
                <>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInput}
                    />
                    <button onClick={this.handleEditClick}>
                        Ok <i className="fa fa-check" />
                    </button>
                    <button onClick={this.handleSetEditableClick}>
                        Cancel <i className="fa fa-close" />
                    </button>
                </>
            );
        }

        return (
            <>
                {this.props.name}
                <button onClick={this.handleSetEditableClick}>
                    Edit <i className="fa fa-pencil" />
                </button>
            </>
        );
    }
}

// Stateless functional component
function FriendsList(props) {
    if (props.friendsList.length === 0) {
        return (
            <p>Friends list is empty</p>
        );
    }

    return (
        <ul>
            {
                props.friendsList.map((name, index) => (
                    <li key={index}>
                        <EditButton onEditFriend={props.onEditFriend} name={name} />
                        <RemoveButton onRemoveFriend={props.onRemoveFriend} name={name} />
                    </li>
                ))
            }
        </ul>
    );
}

class App extends React.Component {
    // Used to enforce default values for props
    static defaultProps = {};

    // Used to enforce required types for props
    static propTypes = {};

    // Set the state as a public field
    state = {
        friends: [],
        inputValue: '',
        isLoaded: false,
    };

    constructor(props) {
        console.log('--constructor--');

        // Initializing props
        super(props);

        // Bindings
        this.handleInput = this.handleInput.bind(this);
        this.handleAddFriend = this.handleAddFriend.bind(this);
        this.handleEditFriend = this.handleEditFriend.bind(this);
        this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
    }

    // Lifecycle method called immediately before each render call
    static getDerivedStateFromProps(props, state) {
        console.log('--getDerivedStateFromProps--');

        return null;
    }

    // Lifecycle method called when the component has been mounted to the actual DOM after the render call
    componentDidMount() {
        console.log('--componentDidMount--');

        // Fetch data from remote APIs here
        fetchFriends().then((value) => {
            this.setState({
                friends: value,
                isLoaded: true,
            });
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('--componentDidUpdate--');
    }

    // Lifecycle method called when the component is unmounted from the actual DOM and before the render call
    componentWillUnmount() {
        console.log('--componentWillUnmount--');
    }

    handleInput(e) {
        // Retrieves the input value from the event before the event pooling
        const value = e.target.value;

        // Cannot access the event object inside an async callback because React does event pooling
        this.setState({ inputValue: value });
    }

    handleAddFriend() {
        if (this.state.inputValue) {
            this.setState((currentState) => ({
                friends: currentState.friends.concat([currentState.inputValue]),
            }));
        }
    }

    handleEditFriend(name, inputValue) {
        // Copies the array (state is immutable)
        let friends = [...this.state.friends];

        for (const key in friends) {
            if (friends[key] === name) {
                friends[key] = inputValue;
            }
        }

        // Enqueues changes and triggers a render call
        this.setState({ friends: friends });
    }

    handleRemoveFriend(name) {
        // Copies the array (state is immutable)
        let friends = [...this.state.friends];

        // Removes the friend from the copied array
        for (let i = friends.length; i >= 0; i--) {
            if (friends[i] === name) {
                friends.splice(i, 1);
            }
        }

        // Enqueues changes and triggers a render call
        this.setState({ friends: friends });
    }

    // React does input.onkeydown = (e) => e.preventDefault() to prevent the input form from being edited
    render() {
        console.log('--render--');

        if (!this.state.isLoaded) {
            return (
                <p>Loading... <i className="fa fa-spinner fa-pulse" /></p>
            );
        }

        return (
            <>
                <input
                    type="text"
                    placeholder="Add friend"
                    value={this.state.inputValue}
                    onChange={this.handleInput}
                />
                <button onClick={this.handleAddFriend}>
                    Add <i className="fa fa-plus" />
                </button>
                <FriendsList
                    friendsList={this.state.friends}
                    onEditFriend={this.handleEditFriend}
                    onRemoveFriend={this.handleRemoveFriend}
                />
            </>
        );
    }
}

// Render the virtual DOM inside the browser node pointed by #app
ReactDOM.render(
    <App />,
    document.querySelector('#app'),
);
