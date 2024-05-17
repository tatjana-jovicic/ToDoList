import useTaskStore from "../../../stores/task/task.store";
import "../listsTasks.styles.css";

const TaskHeader = () => {
  const { tasks } = useTaskStore();
  const tasks_completed = tasks.filter((task) => task.isCompleted).length;
  const total_tasks = tasks.length;

  return (
    <>
      {tasks && tasks.length > 0 ? (
        <section>
          <div className="label">
            <div className="title_box">
              <h1>Gotovi taskovi!</h1>
              <h2>Nastavi tako!</h2>
            </div>
            <span>
              {tasks_completed}/{total_tasks}
            </span>
          </div>
        </section>
      ) : (
        <>
          <h1 className="no_tasks">Nema taskova!</h1>
        </>
      )}
    </>
  );
};
export default TaskHeader;
