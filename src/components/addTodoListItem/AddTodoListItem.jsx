import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../state/actions/actions';
import { v4 as uuid } from 'uuid';
import AutosizingTextarea from '../autosizingTextarea';
import Card from '../card';
import {
  PrimaryButton,
  SecondaryButton
} from '../button';
import Input from '../input';

import './addTodoListItem.scss';

function generateTodo(name, description) {
  return {
    id: uuid(),
    name,
    description,
    creationDate: '' + Date.now()
  };
}

export function AddTodoListItem(props) {
  const {
    onAddTodo
  } = props;

  const [addingItem, setAddingItem] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function submitTodo() {
    onAddTodo(generateTodo(name, description));
    setAddingItem(false);
  }

  function cancel() {
    setName('');
    setDescription('');
    setAddingItem(false);
  }

  return (
    !addingItem ? (
      <PrimaryButton onClick={() => setAddingItem(true)}>New todo</PrimaryButton>
    ) : (
      <Card>
        <Input
          placeholder={'Enter a name'}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <AutosizingTextarea
          placeholder={'Enter a description'}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div className='todo-list__new-item-actions'>
          <SecondaryButton onClick={cancel}>Cancel</SecondaryButton>
          <PrimaryButton onClick={submitTodo}>Add</PrimaryButton>
        </div>
      </Card>
    )
  );
}

AddTodoListItem.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todo => dispatch(addTodo(todo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodoListItem);
