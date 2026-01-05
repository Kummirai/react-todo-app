import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    console.log(task);
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
        <button className="btn" onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
}

export default App;
