import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import TodoListItem from '../todoListItem';

function renderTodos(todos) {
  return Object.values(todos)
    .map((todo) => <TodoListItem key={todo.id} {...todo} />);
}


export function TodoList(props) {
  const { todos } = props;

  return (
    <ul>
      {renderTodos(todos)}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired
  }))
};

export function Container(props) {
  const { todos } = props;

  return (
    <TodoList todos={todos.toJS && todos.toJS()} />
  );
}

Container.propTypes = {
  todos: PropTypes.instanceOf(Immutable.Map)
};

const mapStateToProps = (state) => ({
  todos: state.todos
});


export default connect(
  mapStateToProps
)(Container);
