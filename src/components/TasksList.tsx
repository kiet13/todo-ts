import React from "react";
import { ITask } from "../Interfaces";
import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

interface TaskListProps {
  tasks: ITask[];
  taskCompleted(id: string): void;
  taskDeleted(id: string): void;
}

interface TaskItemProps {
  task: ITask;
  taskCompleted(id: string): void;
  taskDeleted(id: string): void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, taskCompleted, taskDeleted }) => {
  const itemClasses = ["task-item"];
  !task.isDone ? itemClasses.push("todo") : itemClasses.push("done");

  return (
    <div className="task-item-container">
      <div className={itemClasses.join(" ")}>
        <span onClick={() => taskCompleted(task.id)}>
          {!task.isDone ? <RiCheckboxBlankLine /> : <RiCheckboxLine />}
        </span>
        <p>{task.taskName}</p>
      </div>
      <button className="btn-delete" onClick={() => taskDeleted(task.id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

const TasksList: React.FC<TaskListProps> = ({ tasks, taskCompleted, taskDeleted }) => {
  const renderedTasks = tasks.map((task) => (
    <TaskItem key={task.id} task={task} taskCompleted={taskCompleted} taskDeleted={taskDeleted} />
  ));
  return <div className="tasks-list">{renderedTasks}</div>;
};

export default TasksList;
