import { useState } from "react";
import Button from "../../components/Button/Button";
import { useTaskStore } from "../../stores/task/task.store";
import "./KreirajTask.css";
import { Alert, Snackbar } from "@mui/material";

const KreirajTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [success, setSuccess] = useState(false);
  const { tasks, addItemToList } = useTaskStore();

  const handleInputChange = (event) => {
    //We are storing the current value of the input field in a state variable
    setInputValue(event.target.value);
  };

  const handleClickButton = () => {
    //console.log("Input field value:", inputValue);
    if (inputValue !== "") {
      const itemToAdd = {
        id: tasks.length + 1,
        title: inputValue,
        isCompleted: false,
      };
      addItemToList(itemToAdd);
      setSuccess(true);
      setInputValue("");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
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
      <Snackbar open={success} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task added!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default KreirajTask;
