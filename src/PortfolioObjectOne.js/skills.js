import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

export const skills = [
  {
    id: "HTML5",
    icon: <FontAwesomeIcon icon={faHtml5} className="skillsIcon-html" />,
  },
  {
    id: "CSS3",
    icon: <FontAwesomeIcon icon={faCss3} className="skillsIcon-css" />,
  },
  {
    id: "SCSS",
    icon: <FontAwesomeIcon icon={faSass} className="skillsIcon-scss" />,
  },
  {
    id: "JAVA SCRIPT",
    icon: <FontAwesomeIcon icon={faNodeJs} className="skillsIcon-js" />,
  },
  {
    id: "React Js",
    icon: <FontAwesomeIcon icon={faReact} className="skillsIcon-react" />,
  },
  {
    id: "BOOTSRAP",
    icon: (
      <FontAwesomeIcon icon={faBootstrap} className="skillsIcon-bootsrap" />
    ),
  },
];
