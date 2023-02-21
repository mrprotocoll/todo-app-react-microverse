const InputTodo = () => (
  <>
    <form id="new-task-form" className="row new-task-container">
      <input type="text" className="input" placeholder="Add to your list..." id="task-description" />
      <button type="submit" className="pointer"><i className="fas fa-long-arrow-alt-left" /></button>
    </form>
  </>
);

export default InputTodo;
