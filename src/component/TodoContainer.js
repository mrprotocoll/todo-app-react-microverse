import { TodosProvider } from 'context/TodoContext';
import InputTodo from './InputTodo';
import TodoLists from './TodoLists';

const TodoContainer = () => (
  <TodosProvider>
    <InputTodo />
    <TodoLists />
  </TodosProvider>
);

export default TodoContainer;
