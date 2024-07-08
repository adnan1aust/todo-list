import Task from "./Task";
import { TASK_STATUS } from "../const";
import { TaskType } from "../types";

type ListPropsType = {
  title: string;
  bgColor: string;
  taskList: TaskType[];
};

const List = ({ title, bgColor, taskList }: ListPropsType) => {
  return (
    <div className={`grow rounded p-4 flex flex-col gap-2 ${bgColor}`}>
      <h1>{title}</h1>
      {taskList.map((task: TaskType) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default List;
