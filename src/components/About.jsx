import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { GoTriangleRight } from "react-icons/go";
import myImg from "../../src/assets/kajalImg.jpeg";
import "../styles/about.css";

export const About = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="about"
      style={{
        "--bglightabout": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c"
      }}
    >
      <p>About </p>
      <div id="aboutcontent">
        <div id="myselfdesc" data-aos="zoom-in">
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px"
                }}
              />
            </div>
            <p>
              Hello! I'm <span>Kajal Jha</span> from <span>Delhi, India</span>.{" "}
              <br /> I'm passionate about creating innovative and interactive
              web applications 🚀.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px"
                }}
              />
            </div>
            <p>
              In 2024, I graduated with a Master's degree in Computer
              Applications(MCA). My passion lies in creating innovative and
              interactive web applications as a Full Stack MERN developer.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px"
                }}
              />
            </div>
            <p>
              My journey is marked by extensive hands-on experience with
              real-world projects, where I have leveraged my expertise in Full
              Stack development to drive impactful solutions.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px"
                }}
              />
            </div>
            <p>
              From dynamic front-end interfaces to robust back-end systems, I am
              dedicated to pushing the boundaries of web technology and
              delivering exceptional user experiences.
            </p>
          </div>

          {/* <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px"
                }}
              />
            </div>
            <p>
              <strong>Certificates:</strong> <br />
              Data Analytics with Python (03/2023 - 05/2023) <br />
              Python Data Structures (11/2022 - 11/2022) <br />
              Data Analysis with Machine Learning (05/2023 - 05/2023)
            </p>
          </div> */}
        </div>

        <div id="myimg">
          <img src={myImg} alt="Myself" />
        </div>
      </div>
    </div>
  );
};
