import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import TodoListItem from '../todoListItem';

function renderTodos(todos) {
  return Object.values(todos)
    .map((todo) => <TodoListItem key={todo.id} {...todo} />);
}

export function TodoList(props) {
  const { todos } = props;

  return (
    <div>
      {renderTodos(todos)}
    </div>
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

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(
  mapStateToProps
)(TodoList);
