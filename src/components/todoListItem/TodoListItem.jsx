import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo, updateTodo } from '../../state/actions/actions';
import InlineEditable from '../inline-editable';
import TextareaAutosize from 'react-autosize-textarea';

import './todoListItem.scss';

export function TodoListItem(props) {
  const {
    id,
    creationDate,
    onRemove,
    onUpdate
  } = props;
  const nameInStore = props.name;
  const descriptionInStore = props.description;

  const [description, setDescription] = useState(descriptionInStore);
  const [name, setName] = useState(nameInStore);

  useEffect(() => {
    // Set description state if stored description changes
    setDescription(descriptionInStore);
  }, [descriptionInStore]);

  useEffect(() => {
    // Set name state if stored name changes
    setName(nameInStore);
  }, [nameInStore]);

  function remove() {
    onRemove(id);
  }

  function updateName(newName) {
    newName !== nameInStore && onUpdate({id, name: newName});
  }

  function updateDescription(newDescription) {
    newDescription !== descriptionInStore &&
      onUpdate({id, description: newDescription});
  }

  return (
    <li className='todo-list__item'>
      <div>
        <InlineEditable
          value={name}
          placeholder={' '}
          onSubmit={updateName}
        >
          <input
            onChange={e => setName(e.target.value)}
          />
        </InlineEditable>
        <button onClick={remove}>
          Remove
        </button>
      </div>
      <InlineEditable
        value={description}
        placeholder={' '}
        onSubmit={updateDescription}
      >
        <TextareaAutosize
          onChange={e => setDescription(e.target.value)}
        />
      </InlineEditable>
      <a>{creationDate}</a>
    </li>
  );
}

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(removeTodo(id)),
    onUpdate: todo => dispatch(updateTodo(todo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoListItem);
