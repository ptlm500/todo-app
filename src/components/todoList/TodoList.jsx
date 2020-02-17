import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoListItem from '../todoListItem';
import { theme } from '../../styles';

function renderTodos(todos) {
  return Object.values(todos)
    .map((todo) => <TodoListItem key={todo.id} {...todo} />);
}


function TodoList(props) {
  const { className, todos } = props;

  return (
    <div className={className}>
      {renderTodos(todos)}
    </div>
  );
}

export const StyledTodoList = styled(TodoList)`
  border-left: 1px solid ${theme.divider};

  padding-left: 0.5rem;

  > * {
    margin: 1rem 0;
  }
`;

TodoList.propTypes = {
  className: PropTypes.string,
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
    <StyledTodoList todos={todos.toJS && todos.toJS()} />
  );
}

Container.propTypes = {
  todos: PropTypes.instanceOf(Immutable.Map)
};

const mapStateToProps = (state) => ({
  todos: state.todos.get('present')
});


export default connect(
  mapStateToProps
)(Container);
