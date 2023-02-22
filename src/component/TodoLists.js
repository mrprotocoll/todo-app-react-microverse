import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoLists = ({
  todos, handleTodoItemCheck, deleteItem, updateItem,
}) => (
  <ul id="todo-list">
    {todos.map((item) => (
      <TodoItem
        key={item.id}
        deleteItem={deleteItem}
        handleTodoItemCheck={handleTodoItemCheck}
        item={item}
        updateItem={updateItem}
      />
    ))}
  </ul>
);

TodoLists.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  handleTodoItemCheck: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default TodoLists;
