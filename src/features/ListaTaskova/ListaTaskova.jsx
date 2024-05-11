import { useTaskStore } from "../../stores/task/task.store";
import "./ListaTaskova.css";
import Bin from "../../assets/Dust-bin.png";
import WriteIcon from "../../assets/WriteIcon.png";

const ListaTaskova = () => {
  const { tasks, removeTaskFromList } = useTaskStore();

  return (
    <div className="task_list">
      <div className="label">
        <div className="title_box">
          <h1>Gotovi taskovi!</h1>
          <h2>Nastavi tako!</h2>
        </div>
        <span>0/{tasks.length}</span>
      </div>
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <input type="checkbox" />
          <p>{task.title}</p>
          <span>
            <img src={WriteIcon} />
            <img src={Bin} onClick={() => removeTaskFromList(task.id)} />
          </span>
        </div>
      ))}
    </div>
  );
};
export default ListaTaskova;
