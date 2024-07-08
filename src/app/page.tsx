"use client";
import { useState } from "react";
import List from "./components/List";
import { OPERATION_MODE, TASK_STATUS } from "./const";
import { TaskType } from "./types";
import Modal from "./components/Modal";
import CrateEditTask from "./components/CreateEditTask";
import Button from "./components/Button";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [operationMode, setOperationMode] = useState<OPERATION_MODE>(OPERATION_MODE.CREATE);
  const [defaultTask, setDefaultTask] = useState<TaskType>({
    id: "",
    title: "",
    description: "",
    priority: "low", //dropdowns are mandatory so no need to give optional empty field
    startDate: new Date(),
    endDate: new Date(),
    status: TASK_STATUS.PENDING,
    assignee: "p1",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const resetDefaultTask = () => {
    setDefaultTask({
      id: "",
      title: "",
      description: "",
      priority: "low", //dropdowns are mandatory so no need to give optional empty field
      startDate: new Date(),
      endDate: new Date(),
      status: TASK_STATUS.PENDING,
      assignee: "p1",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    resetDefaultTask();
    setOperationMode(OPERATION_MODE.CREATE);
  };

  const createTask = (task: TaskType) => {
    const newTask: TaskType = {
      id: uuidv4(),
      title: task.title,
      description: task.description,
      priority: task.priority,
      startDate: task.startDate,
      endDate: task.endDate,
      status: task.status,
      assignee: task.assignee,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks([newTask, ...tasks]);
    closeModal();
  };

  const updateTask = (task: TaskType) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    closeModal();
  };

  const handleEditClick = (id: string) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setDefaultTask({ ...task });
      setIsModalOpen(true);
      setOperationMode(OPERATION_MODE.EDIT);
    }
  };

  return (
    <main className="flex min-h-screen max-w-[1400px] mx-auto flex-col p-10 gap-4">
      <div className="flex">
        <h1 className="text-5xl font-bold">To Do App</h1>
        <div className="ml-auto">
          <Button label="Create Task" handleOnClick={() => setIsModalOpen(true)} variant="primary" />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <List
          title="To-do"
          bgColor="bg-gray-200"
          taskList={tasks.filter((task) => task.status === TASK_STATUS.PENDING)}
          handleEditClick={handleEditClick}
        />
        <List
          title="In-Progress"
          bgColor="bg-yellow-200"
          taskList={tasks.filter((task) => task.status === TASK_STATUS.IN_PROGRESS)}
          handleEditClick={handleEditClick}
        />
        <List
          title="Done"
          bgColor="bg-green-200"
          taskList={tasks.filter((task) => task.status === TASK_STATUS.DONE)}
          handleEditClick={handleEditClick}
        />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <CrateEditTask
            handleCancelClick={closeModal}
            operationMode={operationMode}
            handleSaveClick={(task: TaskType) => createTask(task)}
            handleEditClick={(task: TaskType) => updateTask(task)}
            defaultTask={defaultTask}
          />
        </Modal>
      )}
    </main>
  );
}
