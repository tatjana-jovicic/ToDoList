import "./Button.css";

const Button = ({ buttonText, handleButtononClick }) => {
  return (
    <button className="button" onClick={handleButtononClick}>
      {buttonText}
    </button>
  );
};
export default Button;
