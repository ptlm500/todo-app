import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeTodo, updateTodo } from '../../state/actions/actions';
import Card from '../card';
import CreationDate from './CreationDate';
import Description from './Description';
import IconButton from '../iconButton';
import Name from './Name';
import { Delete } from '../../icons';

function TodoListItem(props) {
  const {
    id,
    name,
    description,
    creationDate,
    onRemove,
    onUpdate
  } = props;

  function remove() {
    onRemove(id);
  }

  function updateName(newName) {
    newName !== name && onUpdate({id, name: newName});
  }

  function updateDescription(newDescription) {
    newDescription !== description &&
      onUpdate({id, description: newDescription});
  }

  return (
    <TodoListCard>
      <TodoListTitleRow>
        <Name name={name} updateName={updateName} />
        <IconButton size={'small'} onClick={remove}>
          <Delete />
        </IconButton>
      </TodoListTitleRow>
      <Description
        description={description}
        updateDescription={updateDescription}
      />
      <CreationDate creationDate={creationDate} />
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
