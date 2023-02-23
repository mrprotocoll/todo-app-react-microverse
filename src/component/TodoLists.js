import { useTodoContext } from 'context/TodoContext';
import TodoItem from './TodoItem';

const TodoLists = () => {
  const { todos } = useTodoContext();
  return (
    <ul id="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoLists;
