import { useTaskStore } from "../../stores/task/task.store";
import "./ListaTaskova.css";
import Bin from "../../assets/Dust-bin.png";
import WriteIcon from "../../assets/WriteIcon.png";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

const ListaTaskova = () => {
  const {
    tasks,
    removeTaskFromList,
    setTasks,
    completedCount,
    setCompletedCount,
  } = useTaskStore();
  const [isRemoved, setRemoved] = useState(false);
  const router = useNavigate();

  const handleTaskRemove = (id) => {
    removeTaskFromList(id);
    setRemoved(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setRemoved(false);
  };

  const handleNavigate = () => {
    router(`/kreiraj_task`);
  };

  const handleClick = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    //update the tasks state
    setTasks(updatedTasks);
    //calculate the number of completed tasks
    const completedTasks = updatedTasks.filter((task) => task.isCompleted);
    setCompletedCount(completedTasks.length); //update completedCount in store
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      {tasks.length ? (
        <>
          <div className="task_list">
            <div className="label">
              <div className="title_box">
                <h1>Gotovi taskovi!</h1>
                <h2>Nastavi tako!</h2>
              </div>
              <span>
                {completedCount}/{tasks.length}
              </span>
            </div>
            {tasks.map((task) => (
              <div className="task" key={task.id}>
                <Checkbox {...label} onClick={() => handleClick(task.id)} />
                <p>{task.title}</p>
                <span>
                  <img src={WriteIcon} />
                  <img src={Bin} onClick={() => handleTaskRemove(task.id)} />
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="no_tasks">Nema taskova!</h2>
          <Button
            buttonText="Kreiraj task"
            handleButtononClick={handleNavigate}
          />
        </>
      )}
      <Snackbar open={isRemoved} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task deleted!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default ListaTaskova;
