import "./App.css";
import Pocetna from "./features/Pocetna/Pocetna";
import KreirajTask from "./features/KreirajTask/KreirajTask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigacija from "./features/Navigacija/Navigacija";
import ListaTaskova from "./features/ListaTaskova/ListaTaskova";
import ONama from "./features/ONama/ONama";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigacija />
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/kreiraj_task" element={<KreirajTask />} />
          <Route path="/lista_taskova" element={<ListaTaskova />} />
          <Route path="/o_nama" element={<ONama />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
