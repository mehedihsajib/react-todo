import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <div className="todoApp__wrapper">
        <h2>What's your plan today?</h2>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
