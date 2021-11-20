import React, { ChangeEvent } from "react";
import { FaPlus } from "react-icons/fa";

interface TaskFormProps {
  taskName: string;
  taskEdited(event: ChangeEvent<HTMLInputElement>): void;
  taskAdded(): void;
}

const TaskForm: React.FC<TaskFormProps> = ({ taskName, taskEdited, taskAdded }) => {
  return (
    <div className='task-form'>
      <input type='text' placeholder='Add your new task' value={taskName} onChange={taskEdited} />
      <button className='btn-add' onClick={taskAdded}>
        <FaPlus />
      </button>
    </div>
  );
};

export default TaskForm;
