import { Dialog, DialogTitle } from "@mui/material";
import useTaskStore from "../../stores/task/task.store";
import { useState } from "react";
import Button from "../Button/Button";
import "./EditToDoModal.css";
import useNotificationStore from "../../stores/notification/notification.store.js";
import CloseIcon from "../../assets/closeIcon.webp";

const EditToDoModal = () => {
  const { setNotification } = useNotificationStore((state) => state);
  const { editTask, setDialog, dialog } = useTaskStore();
  const { isOpen, item } = dialog;
  const [editedTitle, setEditedTitle] = useState(item.title || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item) {
      editTask(item.id, { title: editedTitle });
      setEditedTitle("");
      setDialog(false, null);
      setNotification(true, "Task successfully updated!", "info");
    }
  };

  const handleClose = () => {
    setDialog(false, null);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "15px",
          position: "relative",
          overflowX: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "start",
          fontWeight: "bold",
          padding: "0px",
        }}
      >
        UREDI TASK:
      </DialogTitle>
      <img
        onClick={handleClose}
        className="closeIcon"
        src={CloseIcon}
        alt="close icon"
      />
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="task">
          <input
            type="text"
            name="task"
            id="task"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </label>
        <Button buttonText="Sačuvaj" />
      </form>
    </Dialog>
  );
};
export default EditToDoModal;
