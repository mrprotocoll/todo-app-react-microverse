import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import styles from 'styles/TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import { useTodoContext } from 'context/TodoContext';

function TodoItem({ item }) {
  const { id, title, completed } = item;
  const [edit, setEdit] = useState(false);
  const titleRef = useRef(null);
  const { handleTodoItemCheck, deleteItem, updateItem } = useTodoContext();

  const handleUpdate = (event) => {
    if (event.key === 'Enter') {
      updateItem(id, titleRef.current.value);
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
          <button type="button" className="pointer" onClick={() => setEdit(!edit)}>
            <AiFillEdit />
          </button>
          <button type="button" className="pointer del-btn" onClick={() => deleteItem(id)}>
            <FaTrash />
          </button>
        </div>
      </div>
      <div className={edit ? 'd-flex' : 'd-none'}>
        <input
          type="text"
          ref={titleRef}
          className={styles.textInput}
          defaultValue={title}
          onKeyDown={handleUpdate}
          onBlur={() => setEdit(false)}
        />
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
};

export default TodoItem;
