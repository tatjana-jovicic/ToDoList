import { Link } from "react-router-dom";
import "./Navigation.css";
import MegaphonIcon from "../../components/MegaphonIcon/MegaphonIcon";
import { useTaskStore } from "../../stores/task/task.store";

const Navigation = () => {
  const { tasks } = useTaskStore();

  return (
    <nav>
      <div className="nav">
        <MegaphonIcon />
        <div className="nav_links">
          <Link to={{ pathname: "/" }}>Početna</Link>
          <Link to={{ pathname: "/create_task" }}>Kreiraj task</Link>
          <div className="span_div">
            <span>{tasks.length}</span>
            <Link to={{ pathname: "/lists_tasks" }}> Lista taskova</Link>
          </div>
          <Link to={{ pathname: "/about_me" }}>O meni</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
