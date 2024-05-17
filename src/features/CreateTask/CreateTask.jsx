import { useState } from "react";
import Button from "../../components/Button/Button";
import { useTaskStore } from "../../stores/task/task.store";
import "./CreateTask.css";
import useNotificationStore from "../../stores/notification/notification.store";

const CreateTask = () => {
  const [inputValue, setInputValue] = useState("");
  const { tasks, addTaskToList } = useTaskStore();
  const setNotifcation = useNotificationStore((state) => state.setNotification);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickButton = () => {
    if (inputValue !== "") {
      const taskToAdd = {
        id: tasks.length + 1,
        title: inputValue,
        isCompleted: false,
      };
      addTaskToList(taskToAdd);
      setInputValue("");
      setNotifcation(true, "Task added!", "success");
    }
  };

  return (
    <div className="create_div">
      <p>Koji je tvoj sledeći task?</p>
      <input
        type="text"
        placeholder="Upiši..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button buttonText="Sačuvaj" handleButtononClick={handleClickButton} />
    </div>
  );
};
export default CreateTask;
