import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState({});
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleChange = (e) => {
    setTask({ id: tasks.length, taskTitle: e.target.value, isChecked: false });
  };

  const handleClick = () => {
    if (task.taskTitle === "") {
      return;
    }
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    setTask({ taskTitle: "" });
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((item) => {
      return item.id !== id;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleCheck = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const completedStyle = {
    textDecoration: "line-through",
    opacity: 0.7,
    color: "#888",
    fontStyle: "italic",
  };

  const activeStyle = {
    textDecoration: "none",
    opacity: 1,
    color: "#000",
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
          placeholder="Add a task"
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
                  <input
                    type="checkbox"
                    checked={item.isChecked || false}
                    onChange={() => handleCheck(item.id)}
                  />
                  <p style={item.isChecked ? completedStyle : activeStyle}>
                    {item.taskTitle}
                  </p>
                </div>

                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
