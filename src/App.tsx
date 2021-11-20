import React, { ChangeEvent, useState } from "react";
import TaskForm from "./components/TaskForm";
import { ITask } from "./Interfaces";

function App() {
  const [task, setTask] = useState<ITask>({ name: "", isDone: false });
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const taskEdited = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask({ name: event.target.value, isDone: false });
  };

  const taskAdded = (): void => {
    setTaskList([...taskList, task]);
    setTask({ name: "", isDone: false });
  };

  return (
    <div className='wrapper'>
      <h1>Todo App</h1>
      <TaskForm taskName={task.name} taskEdited={taskEdited} taskAdded={taskAdded} />
    </div>
  );
}

export default App;
