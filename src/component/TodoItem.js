import PropTypes from 'prop-types';

function TodoItem({ id, name }) {
  return (
    <li className="row" data-id={id}>
      <div className="task">
        <input type="checkbox" data-id={id} className="task-check" />
        <span className="task-title">{name}</span>
      </div>
      <i className="fas fa-ellipsis-v pointer edit-task" />
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.isRequired,
};

export default TodoItem;
