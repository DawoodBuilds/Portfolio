import "./styles/About.css";
import { config } from "../config";

function titleCase(str: string): string {
  const splitStr = str.toLowerCase().split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para">{titleCase(config.about.description)}</p>
      </div>
    </div>
  );
};

export default About;
