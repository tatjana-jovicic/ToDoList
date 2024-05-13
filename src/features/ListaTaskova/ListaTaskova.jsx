import { useTaskStore } from "../../stores/task/task.store";
import "./ListaTaskova.css";
import Bin from "../../assets/Dust-bin.png";
import WriteIcon from "../../assets/WriteIcon.png";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import Checkbox from "@mui/material/Checkbox";
import EditToDoModal from "../../components/Dialog/EditToDoModal";

const ListaTaskova = () => {
  const { tasks, removeTaskFromList, markTodoCompleted, setDialog, dialog } =
    useTaskStore();
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
    markTodoCompleted(id);
  };

  // console.log(tasks);

  const todos_completed = tasks.filter((task) => task.isCompleted).length;

  // const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
                {todos_completed}/{tasks.length}
              </span>
            </div>
            {tasks.map((task) => (
              <div
                className="task"
                key={task.id}
                onClick={() => handleClick(task.id)}
              >
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  cursor="pointer"
                  width={30}
                  height={30}
                  stroke="#57c339"
                  fill={task.isCompleted ? "#57c339" : "#0d0d0d"}
                >
                  <circle
                    cx="11.998"
                    cy="11.998"
                    fillRule="nonzero"
                    r="9.998"
                  />
                </svg>
                <p
                  style={
                    task.isCompleted ? { textDecoration: "line-through" } : {}
                  }
                >
                  {task?.title}
                </p>
                {/* //another way for checkbox using MUI
                 <Checkbox {...label} onClick={() => handleClick(task.id)} />
                <p>{task.title}</p> */}
                <span>
                  <img src={WriteIcon} onClick={() => setDialog(true, task)} />
                  <img
                    src={Bin}
                    onClick={() => {
                      handleTaskRemove(task.id);
                      alert(`Task "${task.title}" deleted.`);
                    }}
                  />
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
      {dialog.isOpen && <EditToDoModal />}
    </div>
  );
};
export default ListaTaskova;
