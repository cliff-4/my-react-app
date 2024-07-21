// Page components
// import DefaultPage from "../components/DefaultPage";
import Home from "../components/Home";
import Projects from "../components/Projects";
// import TodoList from "../components/TodoList";
import Theme from "../components/Theme";
// Icons for sidebar
import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
// import { FaListCheck } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";
// import { GiHummingbird } from "react-icons/gi";

export const Pages = [
  {
    view: <Home />,
    icon: <FaHome size="24" />,
    tooltip: "Home",
  },
  {
    view: <Projects />,
    icon: <FaBriefcase size="24" />,
    tooltip: "Projects",
  },
  // {
  //   view: <TodoList />,
  //   icon: <FaListCheck size="24" />,
  //   tooltip: "To-Do List",
  // },
  {
    view: <Theme />,
    icon: <FaPaintbrush size="24" />,
    tooltip: "Themes",
  },
  // {
  //   view: <DefaultPage content={"Page 4"} />,
  //   icon: <GiHummingbird size="24" />,
  //   tooltip: "Defauly tool-tip",
  // },
];
