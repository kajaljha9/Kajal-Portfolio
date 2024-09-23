import { useContext } from "react";
import "../styles/projects.css";
import { ThemeContext } from "../context/ThemeContext";
import { GoProject } from "react-icons/go";
import { FaEye } from "react-icons/fa";
// import {
//   SiGithub,
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiReact,
//   SiExpress,
//   SiMongodb
// } from "react-icons/si";
// import blueMercury from "../assets/Screenshot (667).png";
import muiicon from "../../src/assets/mui_icon.png";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiBootstrap,
  SiExpress,
  SiMongodb
  // SiMongoose,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import sql from "../assets/sql.png";
import { RiReactjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import wanderwish from "../../src/assets/wanderwish.png";
import weatherapp from "../../src/assets/weatherapp.png";
import simonsaysgame from "../../src/assets/simonsaysgame.png";
import todoapp from "../../src/assets/todo.png";
import spotifyapp from "../../src/assets/spotify.png";
import photographypage from "../../src/assets/photographypage.png";

export const Projects = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      style={{
        "--bglightproject": light ? "#edf2f8" : "#0a192f",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "white" : "#152235"
      }}
    >
      <p>
        Featured <span>Projects</span>
        <span>
          <GoProject />
        </span>
      </p>
      {/* WanderWish - Airbnb clone */}
      <div className="projectCard">
        <div className="prCardImg">
          <img
          className="projectss"
            src={wanderwish}
            alt="WanderWish"
            style={
              {
                webkitTransform: "scale(.84) !important",
                transform: "scale(.84) !important",
              }
            }
          />
        </div>
        <div className="prCardContent">
          <p>WanderWish</p>
          <p>
            It is an online marketplace that connects people who want to rent
            out their property with people who are looking for accommodations,
            typically for short stays.
          </p>
          <p>
            <span>Tech Stack: </span> HTML, CSS, JavaScript, Bootstrap, MongoDB,
            Node.js, Express.js.
          </p>
          <p>
            <span>URL: </span><a className="projectlink" href="https://wanderwish-rfy8.onrender.com/listings">https://wanderwish-rfy8.onrender.com/listings</a>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
            <SiBootstrap style={{ color: "#009dff" }} className="tsIc" />
            <SiMongodb style={{ color: "green" }} className="tsIc" />
            <DiNodejs style={{ color: "#007396" }} className="tsIc" />
            <SiExpress style={{ color: "grey" }} className="tsIc" />
          </div>
        </div>
      </div>
      {/* Real-time Weather App*/}
      <div className="projectCard">
        <div className="prCardImg">
          <img className="projectss" src={weatherapp} alt="Real-time Weather App" />
        </div>
        <div className="prCardContent">
          <p>Real-time Weather App</p>
          <p>
            The Real-time Weather App is a sleek and responsive application
            built with ReactJS and Material-UI, utilizing APIs to deliver
            accurate, up-to-the-minute weather information.
          </p>
          <p>
            <span>Tech Stack: </span>ReactJS, Material UI.
          </p>
          {/* <p>
            <span>URL: </span>  underconstruction
          </p> */}
          <div className="prCardTs">
            <RiReactjsFill style={{ color: "#3776ab" }} className="tsIc" />
            <img src={muiicon} alt="mui_icon" className="tsIc"></img>
          </div>
        </div>
      </div>

      {/* Simon Says Game */}
      <div className="projectCard">
        <div className="prCardImg">
          <img className="projectss" src={simonsaysgame} alt="Simon Says Game" />
        </div>

        <div className="prCardContent">
          <p>Simon Says Game</p>
          <p>
            The Simon Says game is a classic memory challenge built using HTML,
            CSS, and JavaScript. Players must follow a sequence of colored
            lights, replicating the pattern in the correct order. The game
            features a simple yet engaging interface designed with HTML and CSS,
            while JavaScript handles the logic for sequence generation, user
            input, and game progression.
          </p>
          <p>
            <span>Tech Stack: </span>HTML, CSS, JavaScript.
          </p>
          <p>
            <span>URL: </span><a className="projectlink" href="https://kajaljha9.github.io/Simon-Says-Game/">https://kajaljha9.github.io/Simon-Says-Game/</a>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
        </div>
      </div>

      {/* To-do app*/}
      <div className="projectCard">
        <div className="prCardImg">
          <img className="projectss" src={todoapp} alt="To-do App" />
        </div>
        <div className="prCardContent">
          <p>To-do App</p>
          <p>
            The To-do App is a straightforward and user-friendly task management
            tool built with HTML, CSS, and JavaScript. It allows users to easily
            add, edit, and delete tasks, helping them stay organized and on top
            of their to-do lists. The app clean and intuitive interface is
            crafted with HTML and CSS, while JavaScript manages task
            functionality and user interactions for a seamless experience.
          </p>
          <p>
            <span>Tech Stack: </span>HTML, CSS, JavaScript.
          </p>
          <p>
            <span>URL: </span><a className="projectlink" href="https://kajaljha9.github.io/Todo-App/">https://kajaljha9.github.io/Todo-App/</a>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
        </div>
      </div>

      {/* Spotify player replica */}
      <div className="projectCard">
        <div className="prCardImg">
          <img className="projectss" src={spotifyapp} alt="Spotify Player Replica" />
        </div>

        <div className="prCardContent">
          <p>Spotify Player Replica</p>
          <p>
            The Spotify Player Replica is a visually appealing music player
            built with HTML, CSS, and Bootstrap. It mimics the look and feel of
            Spotify's interface, featuring a sleek design and intuitive layout
            for browsing and controlling music. Bootstrap enhances the app's
            responsiveness and modern aesthetics, while HTML and CSS create a
            polished and engaging user experience.
          </p>
          <p>
            <span>Tech Stack: </span>HTML, CSS, Bootstrap.
          </p>
          <p>
            <span>URL: </span><a className="projectlink" href="https://kajaljha9.github.io/Spotify-Clone/">https://kajaljha9.github.io/Spotify-Clone/</a>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiBootstrap style={{ color: "#009dff" }} className="tsIc" />
          </div>
        </div>
      </div>

      {/* Photography Page */}
      <div className="projectCard">
        <div className="prCardImg">
          <img className="projectss" src={photographypage} alt="Photography Page" />
        </div>
        <div className="prCardContent">
          <p>Photography Page</p>
          <p>
            The Photography Page is a visually stunning showcase designed with
            HTML and CSS. It highlights captivating images in a clean and
            elegant layout, providing an immersive experience for viewing and
            appreciating photography. The page features responsive design
            elements, ensuring it looks great on all devices, and uses CSS to
            create smooth transitions and stylish visual effects.
          </p>
          <p>
            <span>Tech Stack: </span>HTML, CSS.
          </p>
          <p>
            <span>URL: </span><a className="projectlink" href="https://kajaljha9.github.io/PhotographyPage/">https://kajaljha9.github.io/PhotographyPage/</a>
          </p>
          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
          </div>
        </div>
      </div>
    </div>
  );
};
