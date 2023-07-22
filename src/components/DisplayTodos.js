import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateTodoForm from './UpdateTodoForm';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

const DisplayTodos = () => {
  const todosFromStore = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todosFromStore);
  }, [todosFromStore]);

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: { id: id } });
  };

  const openUpdateForm = (todo) => {
    setSelectedTodo(todo);
    setShowUpdateForm(true);
  };

  const closeUpdateForm = () => {
    setShowUpdateForm(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <div
            style={{
              borderRadius: 5,
              backgroundColor: 'white',
              padding: 5,
              margin: 5,
              width: '50%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <p style={{ fontSize: 20, margin: 10 }}>{todo.todo}</p>
            <div style={{ display: 'flex', alignItems: 'center', margin: 10 }}>
              <button
                style={{
                  borderRadius: 5,
                  borderColor: 'gray',
                  fontSize: 15,
                  cursor: 'pointer',
                  marginRight: 5,
                  padding: 5
                }}
                onClick={() => openUpdateForm(todo)}
              >
                <FaPencilAlt />
              </button>
              <button
                style={{
                  borderRadius: 5,
                  borderColor: 'gray',
                  fontSize: 15,
                  cursor: 'pointer',
                  marginRight: 5,
                  padding: 5
                }}
                onClick={() => removeTodo(todo.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </React.Fragment>
      ))}

      {showUpdateForm && selectedTodo && (
        <UpdateTodoForm
          todo={selectedTodo}
          onClose={closeUpdateForm}
        />
      )}
    </div>
  );
}

export default DisplayTodos;



