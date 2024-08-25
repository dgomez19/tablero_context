import React from "react";

import { useLocalStorage } from "./useLocalStorage";

const TodoContext =  React.createContext()

function TodoProvider ({children}) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
    
      const completedTodos = todos.filter(
        todo => !!todo.completed
      ).length;
    
      const totalTodos = todos.length;
    
      // Efectos.
      // Si se envia el array vacio "}, [])" solo se ejecutara la primera vez
      // Si se envia SIN array.  "})" se ejecutara siempre
      // Si se envia el nombre de la variable, solo se actualizara, cuando la variable cambie "}, [completedTodos])"
      // React.useEffect(() => {
      //   console.log('HOLA MUNDO')
      // }, [completedTodos])
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
      );
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      return (
          <TodoContext.Provider value={{
              loading,
              error,
              completedTodos,
              totalTodos,
              searchValue,
              setSearchValue,
              searchedTodos,
              completeTodo,
              deleteTodo,
          }}>
              {children}
          </TodoContext.Provider>
      )
}

export { TodoContext, TodoProvider }
