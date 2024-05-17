import "../listsTasks.styles.css";
import Bin from "../../../assets/Dust-bin.png";
import WriteIcon from "../../../assets/WriteIcon.png";
import useTaskStore from "../../../stores/task/task.store";
import useNotificationStore from "../../../stores/notification/notification.store";

const TaskTask = ({ item }) => {
  const { removeTaskFromList, markTaskCompleted, setDialog } = useTaskStore(
    (state) => state
  );
  const { setNotification } = useNotificationStore((state) => state);

  const completeTask = () => {
    markTaskCompleted(item.id);
    if (item.isCompleted) {
      setNotification(true, "Task is marked as unfinished!", "warning");
      return;
    } else {
      setNotification(true, "Task successfully completed!", "info");
    }
  };

  const handleDelete = () => {
    removeTaskFromList(item.id);
    setNotification(true, "Task deleted!", "error");
  };

  return (
    <li id={item.id} className="task">
      <svg
        onClick={completeTask}
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
        fill={item.isCompleted ? "#57c339" : "#0d0d0d"}
      >
        <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
      </svg>
      <p style={item.isCompleted ? { textDecoration: "line-through" } : {}}>
        {item?.title}
      </p>
      <span>
        <img src={WriteIcon} alt="edit" onClick={() => setDialog(true, item)} />
        <img src={Bin} alt="delete" onClick={handleDelete} />
      </span>
    </li>
  );
};
export default TaskTask;
