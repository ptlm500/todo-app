import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeTodo, updateTodo } from '../../state/actions/actions';
import { AnimatedCard } from '../card';
import CreationDate from './creationDate';
import Description from './description';
import IconButton from '../iconButton';
import Name from './name';
import { Delete } from '../../icons';
import { CSSTransition } from 'react-transition-group';

const timeout = 200;
const animationClass = 'card-transition';

export function TodoListItem(props) {
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
    <TodoListCard animationClass={animationClass} timeout={timeout}>
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

const TodoListCard = styled(AnimatedCard)`
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

function TodoListItemWithAnimation(props) {
  return (
    <CSSTransition
      appear={true}
      in={true}
      exit={false}
      classNames={animationClass}
      timeout={timeout}
      unmountOnExit
    >
      <TodoListItem {...props} />
    </CSSTransition>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(removeTodo(id)),
    onUpdate: todo => dispatch(updateTodo(todo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoListItemWithAnimation);
