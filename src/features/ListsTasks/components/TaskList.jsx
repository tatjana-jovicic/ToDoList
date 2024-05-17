import useTaskStore from "../../../stores/task/task.store";
import "../listsTasks.styles.css";
import TaskTask from "./TaskTask";

const TaskList = () => {
  const { tasks } = useTaskStore();

  return (
    <div className="task_div">
      {tasks?.map((task, id) => (
        <TaskTask key={id} item={task} task={tasks} />
      ))}
    </div>
  );
};
export default TaskList;
