import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const TodoContext = createContext(null);

export const TodosProvider = ({ children }) => {
  const initialTodo = JSON.parse(localStorage.getItem('mpTodo')) || [];
  const [todos, setTodos] = useState(initialTodo);

  useEffect(() => {
    localStorage.setItem('mpTodo', JSON.stringify(todos));
  }, [todos]);

  const handleTodoItemCheck = (id) => {
    setTodos((prev) => prev.map(
      (todo) => ((todo.id === id) ? ({ ...todo, completed: !todo.completed }) : todo),
    ));
  };

  const deleteItem = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const addItem = (title) => {
    setTodos([...todos, {
      id: uuidv4(),
      title,
      completed: false,
    }]);
  };

  const updateItem = (id, title) => {
    setTodos((prev) => prev.map(
      (todo) => ((todo.id === id) ? ({ ...todo, title }) : todo),
    ));
  };

  return (
    <TodoContext.Provider value={{
      todos,
      handleTodoItemCheck,
      deleteItem,
      addItem,
      updateItem,
    }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

export { TodoContext };

TodosProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
