import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Pocetna.css";

const Pocetna = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/kreiraj_task`);
  };

  return (
    <div className="pocetna_div">
      <div>
        <p>Šta planiraš danas?</p>
        <p>Kreiraj svoj novi task!</p>
      </div>
      <Button buttonText="Kreiraj" handleButtononClick={handleNavigate} />
    </div>
  );
};
export default Pocetna;
