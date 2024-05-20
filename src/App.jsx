import "./App.css";
import Home from "./features/Home/Home";
import CreateTask from "./features/CreateTask/CreateTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import ListsTasks from "./features/ListsTasks/ListsTasks";
import About from "./features/About/About";
import Notification from "./components/Notification/Notification";
import useNotificationStore from "./stores/notification/notification.store";

const App = () => {
  const isOpen = useNotificationStore((state) => state.isOpen);

  return (
    <>
      <BrowserRouter>
        {isOpen && <Notification />}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_task" element={<CreateTask />} />
          <Route path="/lists_tasks" element={<ListsTasks />} />
          <Route path="/about_me" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
