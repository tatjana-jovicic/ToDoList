import { Dialog } from "primereact/dialog";
import useTaskStore from "../../stores/task/task.store";
import { useState } from "react";
import Button from "../Button/Button";
import "./EditToDoModal.css";

const EditToDoModal = () => {
  const { editTodo, setDialog, dialog } = useTaskStore();
  const { isOpen, item } = dialog;
  const [editedTitle, setEditedTitle] = useState(item.title || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (item) {
      editTodo(item.id, { title: editedTitle });
      setEditedTitle("");
      setDialog(false, null);
    }
  };

  return (
    <Dialog
      className="dialog_style"
      appendTo="self"
      header="UREDI SVOJ TASK:"
      visible={dialog.isOpen}
      onHide={() => setDialog(false, null)}
    >
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
