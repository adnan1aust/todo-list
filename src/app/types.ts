import { TASK_STATUS } from "./const";

export type TaskType = {
  id: string;
  title: string;
  description: string;
  priority: string;
  startDate: Date;
  endDate: Date;
  status: TASK_STATUS;
  assignee: string;
  createdAt: Date;
  updatedAt: Date;
};
