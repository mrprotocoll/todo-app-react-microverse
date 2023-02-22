import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodoLists from './TodoLists';

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

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
    <>
      <InputTodo addItem={addItem} />
      <TodoLists
        todos={todos}
        handleTodoItemCheck={handleTodoItemCheck}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    </>
  );
};

export default TodoContainer;
