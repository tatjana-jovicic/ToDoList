import { Link } from "react-router-dom";
import "./Navigacija.css";
import MegaphonIcon from "../../components/MegaphonIcon/MegaphonIcon";
import { useTaskStore } from "../../stores/task/task.store";

const Navigacija = () => {
  const { tasks } = useTaskStore();
  return (
    <nav>
      <div className="nav">
        <MegaphonIcon />
        <div className="nav_links">
          <Link to={{ pathname: "/" }}>Početna</Link>
          <Link to={{ pathname: "/kreiraj_task" }}>Kreiraj task</Link>
          <div className="span">
            <span>{tasks.length}</span>
            <Link to={{ pathname: "/lista_taskova" }}> Lista taskova</Link>
          </div>
          <Link to={{ pathname: "/o_nama" }}>O nama</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navigacija;
