import React from "react";
import { nanoid } from "nanoid";

interface TaskListProps {
  tasks: string[];
  taskCompleted(): void;
  taskDeleted(): void;
  doneTasksCleared(): void;
}

const TaskItem: React.FC<{ task: string }> = ({ task }) => {
  return (
    <div className='task-item'>
      <p>{task}</p>
      <button className='btn-done'></button>
    </div>
  );
};

const TasksList: React.FC<TaskListProps> = ({
  tasks,
  taskCompleted,
  taskDeleted,
  doneTasksCleared,
}) => {
  const renderedTasks = tasks.map((item) => <TaskItem key={nanoid()} task={item} />);
  return <div className='tasks-list'>{renderedTasks}</div>;
};

export default TasksList;
