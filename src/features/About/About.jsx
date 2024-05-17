import "./About.css";
import PictureOfMe from "../../assets/picture.png";

const About = () => {
  return (
    <div className="about_div">
      <img src={PictureOfMe} alt="picture of me" />
      <h1>Tatjana Jovičić</h1>
      <p>
        Ja sam student četvrte godine na Fakultetu informacionih tehnologija
        smjer Programiranje i softversko inženjerstvo.
      </p>
    </div>
  );
};
export default About;
