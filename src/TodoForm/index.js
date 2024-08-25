import React from 'react';

import { TodoContext } from '../TodoContext';

import './TodoForm.css'

function TodoForm () {

  const [newTotalValue, setNewTotalValue] = React.useState('')

  const {
    setOpenModal,
    addTodo
  } = React.useContext(TodoContext)

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTotalValue)
    setOpenModal(false)
  }

  const onCancel = (event) => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTotalValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Escribe tu TODO"
        value={newTotalValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm--button-cancel"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
