import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    tasks.push(task);
    setTask("");
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="container">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={task}
          className="input-field"
        />
        <button className="btn btn-add" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="tasks-container">
        <div className="task">
          <input type="checkbox" name="" id="" />
          <p>{task}</p>
          <button className="btn btn-delete">Delete</button>
        </div>
      </div>
    </>
  );
}

export default App;
