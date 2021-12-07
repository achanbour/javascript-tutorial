import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/todoActions';
import TodoList from 'components/TodoList';

// The current state is passed in props
const mapStateToProps = (state) => ({
    todos: state.todos,
});

// Wraps each action creator inside a dispatch function and passes them in props
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...actionCreators }, dispatch),
});

// Create a new connected component
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
