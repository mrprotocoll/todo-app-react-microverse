import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from 'styles/TodoItem.module.css';

function TodoItem({
  item, handleTodoItemCheck, deleteItem, updateItem,
}) {
  const { id, title, completed } = item;
  const [edit, setEdit] = useState(false);

  const handleUpdate = (e) => {
    if (e.key === 'Enter') {
      setEdit(false);
    }
  };

  return (
    <li>
      <div className={`${styles.item} ${edit ? 'd-none' : 'd-flex'}`}>
        <div className="task">
          <input type="checkbox" checked={completed} onChange={() => handleTodoItemCheck(id)} className="task-check" />
          <span className={`task-title ${completed ? 'strike' : ''}`}>{title}</span>
        </div>
        <div>
          <button type="button" onClick={() => setEdit(!edit)}>
            <i className="fas delete-task fa-solid fa-edit pointer icon" />
            {' '}
            Edit
          </button>
          <button type="button" className="pointer" onClick={() => deleteItem(id)}>
            <i className="fas delete-task fa-solid fa-trash-can pointer icon" />
            {' '}
            Delete
          </button>
        </div>
      </div>
      <div className={edit ? 'd-flex' : 'd-none'}>
        <input type="text" value={title} className={styles.textInput} onKeyDown={handleUpdate} onChange={(e) => updateItem(id, e.target.value)} />
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleTodoItemCheck: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default TodoItem;
