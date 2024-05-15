import { useState } from "react";
import Button from "../../components/Button/Button";
import { useTaskStore } from "../../stores/task/task.store";
import "./CreateTask.css";

const CreateTask = () => {
  const [inputValue, setInputValue] = useState("");
  const { tasks, addTaskToList } = useTaskStore();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickButton = () => {
    if (inputValue !== "") {
      const itemToAdd = {
        id: tasks.length + 1,
        title: inputValue,
        isCompleted: false,
      };
      addTaskToList(itemToAdd);
      setInputValue("");
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
