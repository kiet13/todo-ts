import React, { ChangeEvent, useState } from "react";
import TaskForm from "./components/TaskForm";
import { ITask } from "./Interfaces";
import TasksList from "./components/TasksList";
import { nanoid } from "nanoid";
import { data } from "./data";

function App() {
  const [task, setTask] = useState<ITask>({ id: "", taskName: "", isDone: false });
  const [taskList, setTaskList] = useState<ITask[]>(data);

  const taskEdited = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask({ id: nanoid(), taskName: event.target.value, isDone: false });
  };

  const taskAdded = (): void => {
    if (task.taskName.trim()) {
      setTaskList([...taskList, task]);
      setTask({ id: "", taskName: "", isDone: false });
    }
  };

  const taskCompleted = (id: string): void => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: true };
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  const taskDeleted = (id: string): void => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  const tasksCleared = (): void => {
    setTaskList([]);
  };

  const numPendingTasks = taskList.filter((task) => !task.isDone).length;

  return (
    <div className="wrapper">
      <h1>Todo App</h1>
      <TaskForm taskName={task.taskName} taskEdited={taskEdited} taskAdded={taskAdded} />
      <TasksList tasks={taskList} taskCompleted={taskCompleted} taskDeleted={taskDeleted} />
      <div className="task-footer">
        <p>There is {numPendingTasks} pending tasks</p>
        <button className="btn-clear" onClick={tasksCleared}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
