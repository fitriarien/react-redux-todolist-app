import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UpdateTodoForm = ({ todo, onClose }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo.todo);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_TODO', payload: { id: todo.id, todo: updatedTodo } });
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)' }}>
      <div style={{ background: 'white', padding: 20, width: 300, margin: 'auto', marginTop: 100 }}>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
          <button type="submit">Update</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodoForm;
