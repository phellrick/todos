import './App.css';
import TodoCreater from "./components/TodoCreator/TodoCreator";
import TodoList from "./components/TodoList/TodoList";

function App() {


  return (
    <div className="App">
        <TodoCreater/>
        <TodoList/>
    </div>
  );
}

export default App;
