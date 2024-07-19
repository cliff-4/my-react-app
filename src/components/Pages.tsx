// Page components
import Home from "./Home";
import TodoList from "./TodoList";
import DefaultPage from "./DefaultPage";
// Icons for sidebar
import { FaHome } from "react-icons/fa";
import { FaListCheck, FaPaintbrush } from "react-icons/fa6";
import { GiHummingbird } from "react-icons/gi";

export const Pages = [
  {
    view: <Home />,
    icon: <FaHome size="24" />,
    tooltip: "Home",
  },
  {
    view: <TodoList />,
    icon: <FaListCheck size="24" />,
    tooltip: "To-Do List",
  },
  {
    view: <DefaultPage content={"Page 3"} />,
    icon: <FaPaintbrush size="24" />,
    tooltip: "Themes",
  },
  {
    view: <DefaultPage content={"Page 4"} />,
    icon: <GiHummingbird size="24" />,
    tooltip: "Defauly tool-tip",
  },
];
