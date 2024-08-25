import './CreateTodoButton.css';

import { TodoContext } from '../TodoContext';
import React from 'react';

function CreateTodoButton() {

  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  
  return (
    <button
        className="CreateTodoButton"
        onClick={ (event) => {

          setOpenModal(openModal => !openModal)

          console.log('Hola Mundo', openModal)
        }
      }
    >
        +
    </button>
  );
}

export { CreateTodoButton };
