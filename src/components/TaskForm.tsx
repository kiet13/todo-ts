import React, { ChangeEvent, FormEvent } from "react";
import { useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

interface TaskFormProps {
  taskName: string;
  taskEdited(event: ChangeEvent<HTMLInputElement>): void;
  taskAdded(): void;
}

const TaskForm: React.FC<TaskFormProps> = ({ taskName, taskEdited, taskAdded }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmitHandler = (event: FormEvent): void => {
    event.preventDefault();
    taskAdded();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form className="task-form" onSubmit={onSubmitHandler}>
      <input type="text" placeholder="Add your new task" value={taskName} ref={inputRef} onChange={taskEdited} />
      <button className="btn-add" onClick={onSubmitHandler}>
        <FaPlus />
      </button>
    </form>
  );
};

export default TaskForm;
