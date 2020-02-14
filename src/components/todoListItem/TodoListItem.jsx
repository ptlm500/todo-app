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
    onRemove
  } = props;

  function remove() {
    onRemove(id);
  }

  return (
    <li className='todo-list__item'>
      <div>
        <h3>{name}</h3>
        <button onClick={remove}>
          Remove
        </button>
      </div>
      <a>{description}</a>
      <a>{creationDate}</a>
    </li>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(removeTodo(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoListItem);
