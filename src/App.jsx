import "./App.css";
import Home from "./features/Home/Home";
import CreateTask from "./features/CreateTask/CreateTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import ListsTasks from "./features/ListsTasks/ListsTasks";
import About from "./features/About/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
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
