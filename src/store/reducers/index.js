import { combineReducers } from "redux";
import TodoReducer from "./TodoReducer";

const reducers = combineReducers({
  todos: TodoReducer,
});

export default reducers;