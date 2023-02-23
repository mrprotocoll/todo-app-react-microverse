import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from 'styles/InputTodo.module.css';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if title is empty
    if (title.trim()) {
      // add title to todo list
      addItem(title);

      // reset title
      setTitle('');
      setErrorMessage('');
    } else {
      setErrorMessage('Kindly enter item');
    }
  };

  return (
    <>
      <form id="new-task-form" className={styles.container} onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={title} className={styles.input} placeholder="Add to your list..." id="task-description" />
        <button type="submit" aria-label="Add todo item" className="pointer">
          <FaPlusCircle />
        </button>
      </form>
      <span className="error">{errorMessage}</span>
    </>
  );
};

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default InputTodo;
