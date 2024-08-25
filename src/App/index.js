import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext, TodoProvider } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  return (
        <>
        <TodoProvider>
          <TodoCounter />
          <TodoSearch />

          <TodoContext.Consumer >
            {({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo,
              openModal
            }) => (
              <div>
                <TodoList loading={loading} error={error}>
                  {searchedTodos.map(todo => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={() => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                  ))} 
                </TodoList>

                <CreateTodoButton />
                { openModal && (<Modal>
                  <TodoForm />
                </Modal>)}
              </div>
            )}
          </TodoContext.Consumer>
          </TodoProvider>
        </>
  );
}

export default App;
