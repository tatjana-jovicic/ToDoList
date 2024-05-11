import { useState } from "react";
import Button from "../../components/Button/Button";
import { useTaskStore } from "../../stores/task/task.store";
import "./KreirajTask.css";

const KreirajTask = () => {
  const [inputValue, setInputValue] = useState("");
  const { tasks, addItemToList } = useTaskStore();

  const handleInputChange = (event) => {
    //We are storing the current value of the input field in a state variable
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    //console.log("Input field value:", inputValue);
    if (inputValue !== "") {
      const itemToAdd = {
        id: tasks.length + 1,
        title: inputValue,
        isCompleted: false,
      };
      addItemToList(itemToAdd);
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
      <Button buttonText="Sačuvaj" handleButtononClick={handleClick} />
    </div>
  );
};
export default KreirajTask;
