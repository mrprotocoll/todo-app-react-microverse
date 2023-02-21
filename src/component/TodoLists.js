import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoLists = ({ todos }) => (
  <ul className="todo-list" id="todo-list">
    {todos.map((item) => (
      <TodoItem key={item.id} item={item} />
    ))}
  </ul>
);

TodoLists.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};

export default TodoLists;
