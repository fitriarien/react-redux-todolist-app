import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const InputTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: newTodo});
    setNewTodo("");
  }

  return (
    <div style={{marginBottom: 20}}>
      <form onSubmit={addTodo}>
        <input 
          placeholder='Enter to do..' 
          style={{
            width: 350,
            padding: 10,
            borderRadius: 10,
            backgroundColor: 'white',
            border: 'none',
            fontSize: 18
          }}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type='submit'
          style={{
            padding: 12,
            borderRadius: 10,
            fontSize: 15,
            marginLeft: 20,
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
