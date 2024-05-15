import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/create_task`);
  };

  return (
    <div className="home_div">
      <div>
        <p>Šta planiraš danas?</p>
        <p>Kreiraj svoj novi task!</p>
      </div>
      <Button buttonText="Kreiraj" handleButtononClick={handleNavigate} />
    </div>
  );
};
export default Home;
