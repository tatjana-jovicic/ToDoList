import { Dialog } from "primereact/dialog";
import useTaskStore from "../../stores/task/task.store";
import { useState } from "react";
import Button from "../Button/Button";

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
      appendTo="self"
      header="Uredi svoju TO DO listu!"
      visible={dialog.isOpen}
      style={{
        width: "50vw",
        backgroundColor: "white",
        color: "black",
        padding: "1rem",
        borderRadius: "10px",
      }}
      onHide={() => setDialog(false, null)}
    >
      <div className="dialog_form">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="tasks">
            <input
              type="text"
              name="tasks"
              id="tasks"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </label>
          <Button buttonText="Sačuvaj" />
        </form>
      </div>
    </Dialog>
  );
};
export default EditToDoModal;
