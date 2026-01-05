import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleChange = (e) => {
    setTask({ id: tasks.length, taskTitle: e.target.value });
  };

  const handleClick = () => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    setTask.taskTitle("");
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="container">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={task.taskTitle}
          className="input-field"
        />
        <button className="btn btn-add" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="tasks-container">
        {tasks.length === 0 ? (
          <p className="no-tasks">You do not have any tasks yet! </p>
        ) : (
          tasks?.map((item) => {
            return (
              <div className="task" key={item.id}>
                <div className="task-details">
                  <input type="checkbox" name="" id="" />
                  <p>{item.taskTitle}</p>
                </div>

                <button className="btn btn-delete">Delete</button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
