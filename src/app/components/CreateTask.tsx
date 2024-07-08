import Button from "./Button";
import { useState } from "react";
import { TASK_STATUS } from "../const";

type CreateTaskProps = {
  handleSubmitClick: (title: string, description: string) => void;
  handleCancelClick: () => void;
};

const CrateTask = ({ handleSubmitClick, handleCancelClick }: CreateTaskProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  return (
    <div className="flex flex-col gap-2 w-[300px] md:w-[450px]">
      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          Title<span className="text-red-700">*</span>
        </p>
        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={100}
          className="p-2 rounded grow"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          Description<span className="text-red-700">*</span>
        </p>
        <textarea
          placeholder="Enter task title"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={150}
          className="grow p-2 rounded"
        />
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          Priority<span className="text-red-700">*</span>
        </p>
        <input type="radio" id="low" name="priority" value="low" />
        <label htmlFor="low">Low</label>
        <input type="radio" id="medium" name="priority" value="medium" className="ml-2" />
        <label htmlFor="medium">Medium</label>
        <input type="radio" id="high" name="priority" value="high" className="ml-2" />
        <label htmlFor="low">High</label>
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          <label htmlFor="start">
            Start date<span className="text-red-700">*</span>
          </label>
        </p>
        <input type="date" id="start" name="start" className="grow p-2 rounded" />
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          <label htmlFor="end">
            End date<span className="text-red-700">*</span>
          </label>
        </p>
        <input type="date" id="end" name="end" className="grow p-2 rounded" />
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          <label htmlFor="status">
            Status<span className="text-red-700">*</span>
          </label>
        </p>
        <select name="status" id="status" className="grow p-2 rounded">
          <option value={TASK_STATUS.PENDING}>To-Do</option>
          <option value={TASK_STATUS.IN_PROGRESS}>In Progress</option>
          <option value={TASK_STATUS.DONE}>Done</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          <label htmlFor="assignee">
            Assigned Person<span className="text-red-700">*</span>
          </label>
        </p>
        <select name="assignee" id="assignee" className="grow p-2 rounded">
          <option value="p1">Person 1</option>
          <option value="p2">Person 2</option>
          <option value="p3">Person 3</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <p className="w-[150px]"></p>
        <input type="file" id="fileInput" name="files" multiple className="p-2 rounded" />
      </div>

      <div className="flex gap-2">
        <Button variant="primary" label="Create Task" handleOnClick={() => handleSubmitClick(title, description)} />
        <Button variant="destructive" label="Cancel" handleOnClick={handleCancelClick} />
      </div>
    </div>
  );
};

export default CrateTask;
