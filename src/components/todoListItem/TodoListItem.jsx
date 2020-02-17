import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeTodo, updateTodo } from '../../state/actions/actions';
import InlineEditable from '../inline-editable';
import AutosizingTextarea from '../autosizingTextarea';
import Card from '../card';
import IconButton from '../iconButton';
import Name from './Name';
import { Delete } from '../../icons';

function TodoListItem(props) {
  const {
    id,
    creationDate,
    onRemove,
    onUpdate
  } = props;
  const nameInStore = props.name;
  const descriptionInStore = props.description;

  const [description, setDescription] = useState(descriptionInStore);

  useEffect(() => {
    // Set description state if stored description changes
    setDescription(descriptionInStore);
  }, [descriptionInStore]);

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
    <TodoListCard>
      <TodoListTitleRow>
        <Name name={nameInStore} updateName={updateName} />
        <IconButton size={'small'} onClick={remove}>
          <Delete />
        </IconButton>
      </TodoListTitleRow>
      <InlineEditable
        value={description}
        placeholder={' '}
        onSubmit={updateDescription}
      >
        <AutosizingTextarea
          onChange={e => setDescription(e.target.value)}
        />
      </InlineEditable>
      <a>{creationDate}</a>
    </TodoListCard>
  );
}

const TodoListCard = styled(Card)`
  min-width: 300px;
`;

const TodoListTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

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
