import Button from "./Button";
import { useState } from "react";
import { TASK_STATUS } from "../const";
import { TaskType } from "../types";
import { OPERATION_MODE } from "../const";

type CreateEditTaskProps = {
  defaultTask: TaskType;
  operationMode: OPERATION_MODE;
  handleSaveClick: (task: TaskType) => void;
  handleEditClick: (task: TaskType) => void;
  handleCancelClick: () => void;
};

const CrateEditTask = ({
  defaultTask,
  operationMode,
  handleSaveClick,
  handleEditClick,
  handleCancelClick,
}: CreateEditTaskProps) => {
  const [formFields, setFormFields] = useState<TaskType>(defaultTask);

  const handleSubmit = () => {
    if (!formFields.title.trim()) {
      alert("Please enter a title for the task.");
      return;
    }
    if (!formFields.description.trim()) {
      alert("Please enter a description for the task.");
      return;
    }
    if (operationMode === OPERATION_MODE.CREATE) {
      handleSaveClick(formFields);
    } else if (operationMode === OPERATION_MODE.EDIT) {
      handleEditClick(formFields);
    }
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value, type, checked } = e.target as HTMLInputElement;
  const inputValue = type === "radio" ? checked : value;
  const dateValue = type === "date" ? new Date(value) : value;

  setFormFields((prevFields) => ({
    ...prevFields,
    [name as keyof TaskType]:
      type === "radio"
        ? checked
          ? value
          : prevFields[name as keyof TaskType]
        : type === "date"
        ? dateValue
        : inputValue,
  }));
};

  /*TODO: use react hook form if time permits*/

  return (
    <div className="flex flex-col gap-2 w-[300px] md:w-[450px]">
      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          Title<span className="text-red-700">*</span>
        </p>
        <input
          type="text"
          placeholder="Enter task title"
          value={formFields.title}
          name="title"
          onChange={handleChange}
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
          value={formFields.description}
          onChange={handleChange}
          maxLength={150}
          className="grow p-2 rounded"
          name="description"
        />
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          Priority<span className="text-red-700">*</span>
        </p>
        <input
          type="radio"
          id="low"
          name="priority"
          value="low"
          onChange={handleChange}
          checked={formFields.priority === "low"}
        />
        <label htmlFor="low">Low</label>
        <input
          type="radio"
          id="medium"
          name="priority"
          value="medium"
          className="ml-2"
          onChange={handleChange}
          checked={formFields.priority === "medium"}
        />
        <label htmlFor="medium">Medium</label>
        <input
          type="radio"
          id="high"
          name="priority"
          value="high"
          className="ml-2"
          onChange={handleChange}
          checked={formFields.priority === "high"}
        />
        <label htmlFor="low">High</label>
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          <label htmlFor="startDate">
            Start date<span className="text-red-700">*</span>
          </label>
        </p>
        <input
          type="date"
          id="startDate"
          name="startDate"
          className="grow p-2 rounded"
          value={formFields.startDate?.toISOString().slice(0, 10)}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          <label htmlFor="endDate">
            End date<span className="text-red-700">*</span>
          </label>
        </p>
        <input
          type="date"
          id="endDate"
          name="endDate"
          className="grow p-2 rounded"
          value={formFields.endDate?.toISOString().slice(0, 10)}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center gap-2">
        <p className="w-[140px]">
          <label htmlFor="status">
            Status<span className="text-red-700">*</span>
          </label>
        </p>
        <select
          name="status"
          id="status"
          className="grow p-2 rounded"
          value={formFields.status}
          onChange={handleChange}
        >
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
        <select
          name="assignee"
          id="assignee"
          className="grow p-2 rounded"
          value={formFields.assignee}
          onChange={handleChange}
        >
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
        <Button
          variant="primary"
          label={operationMode === OPERATION_MODE.CREATE ? "Create Task" : "Update Task"}
          handleOnClick={handleSubmit}
        />
        <Button variant="destructive" label="Cancel" handleOnClick={handleCancelClick} />
      </div>
    </div>
  );
};

export default CrateEditTask;
