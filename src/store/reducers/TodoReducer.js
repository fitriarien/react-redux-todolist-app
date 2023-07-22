const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      if (state.length === 0) {
        return [ ...state, { id: state.length, todo: action.payload}];
      }
      return [...state, { id: state[state.length-1].id+1, todo: action.payload }];
    case 'REMOVE_TODO':
      return state.filter(curr => curr.id !== action.payload.id);
    case 'UPDATE_TODO':
      return state.map(element => {
        if (element.id === action.payload.id) {
          return { ...element, todo: action.payload.todo } ;
        }
        return element;
      });
    default:
      return state;
  }
}

export default TodoReducer;