import { useTaskStore } from "../../stores/task/task.store";
import "./listsTasks.styles.css";
import EditToDoModal from "../../components/Dialog/EditToDoModal";
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/TaskList";

const ListsTasks = () => {
  const dialog = useTaskStore((state) => state.dialog);

  return (
    <div className="task_list">
      {dialog.isOpen && <EditToDoModal />}
      <TaskHeader />
      <TaskList />
    </div>
  );
};
export default ListsTasks;
