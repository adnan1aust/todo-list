import { TaskType } from "../types";
import { TASK_STATUS } from "../const";

const getPriorityString = (priority: string) => {
  if (priority === "low") {
    return "Low priority";
  } else if (priority === "high") {
    return "High priority";
  } else {
    return "Medium priority";
  }
};

const getStatusString = (status: string) => {
  if (status === TASK_STATUS.IN_PROGRESS) {
    return "In Progress";
  } else if (status === TASK_STATUS.DONE) {
    return "Done";
  } else if (status === TASK_STATUS.PENDING) {
    return "To Do";
  }
};

const getAssigneeString = (assignee: string): string => {
  if (assignee === "p1") {
    return "Person 1";
  } else if (assignee === "p2") {
    return "Person 2";
  } else if (assignee === "p3") {
    return "Person 3";
  } else {
    return "Unassigned";
  }
};

const Task = ({ title, description, status, startDate, endDate, priority, assignee }: TaskType) => {
  return (
    <div className="flex flex-col gap-2 justify-center bg-white p-2">
      <p className="font-semibold">Title:{title}</p>
      <p className="text-sm">Description:{description}</p>
      <p>Start Date: {startDate.toISOString().slice(0, 10)}</p>
      <p>End Date: {endDate.toISOString().slice(0, 10)}</p>
      <p>Priority: {getPriorityString(priority)}</p>
      <p>Status: {getStatusString(status)}</p>
      <p>Assignee: {getAssigneeString(assignee)}</p>
    </div>
  );
};

export default Task;
