import "./App.css";
import List from "./components/List";

function App() {
  const todos = [
    { todo: "wake up", id: 1 },
    { todo: "breakfast", id: 2 },
    { todo: "study", id: 3 },
  ];
  return (
    <div className="App">
      <h1>Todos</h1>
      <List todoList={todos} />
    </div>
  );
}

export default App;
