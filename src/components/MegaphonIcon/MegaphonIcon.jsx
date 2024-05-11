import { useNavigate } from "react-router-dom";
import "./MegaphonIcon.css";
import Megaphone from "../../assets/Megaphone.png";

const MegaphonIcon = () => {
  const router = useNavigate();

  const handleClickIcon = () => {
    router("/");
  };

  return (
    <div className="megaphon" onClick={() => handleClickIcon()}>
      <img src={Megaphone} alt="Megaphone Logo" />
    </div>
  );
};

export default MegaphonIcon;
