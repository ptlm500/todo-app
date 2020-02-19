import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useIntl, defineMessages, FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { addTodo } from '../../state/actions/actions';
import { v4 as uuid } from 'uuid';
import AutosizingTextarea from '../autosizingTextarea';
import { AnimatedCard } from '../card';
import {
  PrimaryButton,
  SecondaryButton,
} from '../button';
import IconButton from '../iconButton';
import { NewTodo } from '../../icons';
import { theme, breakpoints } from '../../styles';

const messages = defineMessages({
  namePlaceholder: {
    id: 'todo.addTodo.namePlaceholder',
    defaultMessage: 'Enter a name',
    description: 'Placeholder message for the add todo name field'
  },
  descriptionPlaceholder: {
    id: 'todo.addTodo.descriptionPlaceholder',
    defaultMessage: 'Enter a description',
    description: 'Placeholder message for the add todo description field'
  }
});

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

  const intl = useIntl();

  const [addingItem, setAddingItem] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function clearState() {
    setName('');
    setDescription('');
  }

  function submitTodo() {
    onAddTodo(generateTodo(name, description));
    clearState();
    setAddingItem(false);
  }

  function cancel() {
    clearState();
    setAddingItem(false);
  }

  const timeout = 200;
  const animationClass = 'card-transition';

  return (
    <>
      {
        !addingItem &&
        <IconButton id="add-item" onClick={() => setAddingItem(true)}>
          <NewTodo />
        </IconButton>
      }
      <CSSTransition
        appear={true}
        exit={false}
        in={addingItem}
        classNames={animationClass}
        timeout={timeout}
        unmountOnExit
      >
        <AddItemForm animationClass={animationClass} timeout={timeout}>
          <NameInput
            id="name-input"
            placeholder={intl.formatMessage(messages.namePlaceholder)}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <DescriptionInput
            id="description-input"
            placeholder={intl.formatMessage(messages.descriptionPlaceholder)}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Actions>
            <SecondaryButton
              id="cancel"
              onClick={cancel}
            >
              <FormattedMessage
                id="todo.addTodo.cancel"
                description="Add todo cancel button text"
                defaultMessage="Cancel"
              />
            </SecondaryButton>
            <PrimaryButton
              id="add"
              onClick={submitTodo}
            >
              <FormattedMessage
                id="todo.addTodo.add"
                description="Add todo add button text"
                defaultMessage="Add"
              />
            </PrimaryButton>
          </Actions>
        </AddItemForm>
      </CSSTransition>
    </>
  );
}

const AddItemForm = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  max-width: fit-content;
  ${breakpoints.phoneOnly('max-width: 90%')}
`;

export const NameInput = styled.input`
  ${theme.headerFontSize};
  font-weight: 600;
  margin-bottom: 1rem;
  max-width: 100%;
`;

export const DescriptionInput = styled(AutosizingTextarea)`
  ${theme.bodyFontSize};
  margin-bottom: 1rem;
  max-width: 100%;
`;

const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  > * {
    margin: 0 0.25rem;

    &:first-child {
      margin: 0 0.5rem 0 0;
    }

    &:last-child {
      margin: 0 0 0 0.25rem;
    }
  }
`;

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
