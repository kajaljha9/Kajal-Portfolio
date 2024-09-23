import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BiDownload } from "react-icons/bi";
import "../styles/home.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import TagCloud from "TagCloud";

// const myTags = [
//   "JavaScript",
//   "CSS",
//   "HTML",
//   "Python",
//   "Java",
//   "SQL",
//   "PowerBI",
//   "OpenCV",
//   "GIT",
//   "Netlify",
//   "C",
//   "DSA",
//   "C++",
//   "OOPS",
//   "Machine Learning",
//   "Data Analysis",
//   "Data Visualization",
//   "Linux",
//   "Git/Github",
//   "SDLC",
//   "System Testing",
//   "Networking"
// ];

const myTags=[
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "ReactJS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "SQL",
  "Material UI",
  "Git",
  "GitHub",
  "MVC Architecture",
];

export const Home = () => {
  const { light } = useContext(ThemeContext);

  useEffect(() => {
    TagCloud(".content", myTags, {
      radius: 200,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true
    });
  }, []);

  return (
    <div id="home" style={{ "--bglight": light ? "#edf2f8" : "#0a192f" }}>
      <div
        id="homecontent"
        style={{
          "--plight": light ? "black" : "white",
          "--namelight": light ? "#dc143c" : "#64ffda",
          "--rolelight": light ? "" : "#dc143c"
        }}
      >
        <p>Hi, I am</p>
        <p>Kajal Jha.</p>
        <p>
          I'm a <span>&nbsp;Software Developer.</span>
        </p>
        <p>
          Enthusiastic problem solving professional with a passion for software
          development . Proficient in Frontend Technologies: HTML, CSS,
          JavaScript, Bootstrap, ReactJS. Eager to contribute to a dynamic team
          and apply my skills in a collaborative environment.
        </p>
        <div className="homeCont">
          <a
            // href="https://drive.google.com/file/d/15gISf7QrmTHdupjvrEgyyB2YGVwapFDC/view?usp=sharing"
            href="https://drive.google.com/file/d/1KeFDe8L0jJ2cnpz5171KWnljFQKIZ2qz/view?usp=sharing"
            style={{ textDecoration: "none" }}
            download="Kajal_Resume"
          >
            <button>
              Resume
              <i>
                <BiDownload />
              </i>
            </button>
          </a>
          <div
            className="homeIcCont"
            style={{ "--icColor": light ? "#0a192f" : "#edf2f8" }}
          >
            <div>
              <a href="https://www.linkedin.com/in/kajaljha9/" target="_blank">
                <BsLinkedin className="homeIc" />
              </a>
            </div>
            <div>
              <a href="https://github.com/kajaljha9" target="_blank">
                <BsGithub className="homeIc" />
              </a>
            </div>
            <div>
              <a href="mailto:kajaljha0900@gmail.com">
                <SiGmail className="homeIc" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="content"
          style={{ order: 1, "--color": light ? "#dc143c" : "#64ffda" }}
        ></div>
      </div>
    </div>
  );
};
