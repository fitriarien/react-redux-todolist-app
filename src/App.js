import './App.css';
import DisplayTodos from './components/DisplayTodos';
import InputTodo from './components/InputTodo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List</h2>
      </header>
      <InputTodo />
      <DisplayTodos />
    </div>
  );
}

export default App;
