import { TASK_STATUS } from "./const";

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: TASK_STATUS;
  createdAt: Date;
};
