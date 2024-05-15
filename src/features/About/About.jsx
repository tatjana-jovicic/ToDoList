import "./About.css";
import PictureOfMe from "../../assets/picture.png";

const About = () => {
  return (
    <div className="about_div">
      <img src={PictureOfMe} alt="picture of me" />
      <h1>Tatjana Jovičić</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, sequi
        eius. Necessitatibus deleniti voluptas assumenda temporibus tenetur est
        nobis quos sit? Quidem non vero corrupti earum, in velit consectetur
        repellat! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Libero id assumenda accusantium ex fugit neque dolore molestiae. Eaque
        hic aperiam repellendus cum tenetur, fugiat harum labore. Sunt,
        distinctio eligendi. Velit.
      </p>
    </div>
  );
};
export default About;
