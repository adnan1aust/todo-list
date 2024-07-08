"use client";
import { useState } from "react";
import List from "./components/List";
import { OPERATION_MODE, TASK_STATUS } from "./const";
import { TaskType } from "./types";
import Modal from "./components/Modal";
import CrateTask from "./components/CreateTask";
import Button from "./components/Button";

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createTask = (title: string, description: string) => {
    const newTask: TaskType = {
      id: new Date().getTime().toString(),
      title,
      description,
      status: TASK_STATUS.PENDING,
      createdAt: new Date(),
    };
    setTasks([newTask, ...tasks]);
    closeModal();
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
        <List title="To-do" bgColor="bg-gray-200" taskList={tasks} />
        <List title="In-Progress" bgColor="bg-yellow-200" taskList={tasks} />
        <List title="Done" bgColor="bg-green-200" taskList={tasks} />
      </div>
      {isModalOpen && (
        <Modal mode={OPERATION_MODE.CREATE} onClose={closeModal}>
          <CrateTask
            handleCancelClick={() => setIsModalOpen(false)}
            handleSubmitClick={(title, description) => createTask(title, description)}
          />
        </Modal>
      )}
    </main>
  );
}
