import { TASK_STATUS } from "../const";
import { TaskType } from "../types";

const Task = ({ title, description, status }: TaskType) => {
  return (
    <div className="flex flex-col gap-2 justify-center bg-white p-2">
      <div className="flex gap-2">
        <p>{title}</p>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Task;
