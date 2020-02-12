import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo } from '../../state/actions/actions';

export function TodoListItem(props) {
  const {
    id,
    name,
    description,
    creationDate,
    onRemoveTodo
  } = props;

  function onDeleteClick() {
    onRemoveTodo({id, name, description, creationDate});
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <button onClick={onDeleteClick}>
          Delete
        </button>
      </div>
      <a>{description}</a>
      <a>{creationDate}</a>
    </div>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveTodo: todo => dispatch(removeTodo(todo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoListItem);
