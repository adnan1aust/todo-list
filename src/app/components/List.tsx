import Task from "./Task";
import { TaskType } from "../types";

type ListPropsType = {
  title: string;
  bgColor: string;
  taskList: TaskType[];
  handleEditClick: (id: string) => void;
};

const List = ({ title, bgColor, taskList, handleEditClick }: ListPropsType) => {
  return (
    <div className={`w-full lg:w-[33%] rounded p-4 flex flex-col gap-2 ${bgColor}`}>
      <h1>{title}</h1>
      {taskList.map((task: TaskType) => (
        <div key={task.id} onClick={() => handleEditClick(task.id)} className="hover:pointer">
          <Task {...task} />
        </div>
      ))}
    </div>
  );
};

export default List;
