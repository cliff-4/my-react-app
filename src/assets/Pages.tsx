// Page components
import Home from "../components/Home";
import Projects from "../components/Projects";
import SkillsPage from "../components/Skills";
import DefaultPage from "../unused/DefaultPage";

// Icons for sidebar
import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";

export const Pages = [
  {
    view: <Home />,
    icon: <FaHome size="24" />,
    tooltip: "Home",
  },
  {
    // add experience here itself
    view: <Projects />,
    icon: <FaBriefcase size="24" />,
    tooltip: "Projects",
  },

  {
    view: <SkillsPage />,
    icon: <FaListCheck size="24" />,
    tooltip: "Skills",
  },
  {
    // add resume here
    view: <DefaultPage content={"Contact"} />,
    icon: <FaPhone size="24" />,
    tooltip: "Contact",
  },
];
