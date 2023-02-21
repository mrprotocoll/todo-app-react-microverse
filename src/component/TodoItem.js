import PropTypes from 'prop-types';

function TodoItem({ item }) {
  const { id, title } = item;
  return (
    <li className="row" key={id}>
      <div className="task">
        <input type="checkbox" className="task-check" />
        <span className="task-title">{title}</span>
      </div>
      <i className="fas fa-ellipsis-v pointer edit-task" />
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.objectOf({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

export default TodoItem;
