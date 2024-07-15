import { FaHome } from "react-icons/fa";
import { FaBarsProgress, FaListCheck } from "react-icons/fa6";

const defaultIconSize = 24;
const sideBarElements = [
  { icon: <FaHome size={defaultIconSize} />, tooltip: "Home" },
  { icon: <FaListCheck size={defaultIconSize} />, tooltip: "ToDo List" },
  { icon: <FaBarsProgress size={defaultIconSize} />, tooltip: "TBD" },
];

interface SidebarProps {
  pageSetter: (index: number) => void;
  activeIndex?: number;
}

const Sidebar = ({ pageSetter, activeIndex }: SidebarProps) => {
  return (
    <div className="sidebar">
      {sideBarElements.map((element, index) => (
        <SidebarIcon
          icon={element.icon}
          text={element.tooltip}
          isactive={activeIndex === index}
          onClick={() => pageSetter(index)}
        />
      ))}
    </div>
  );
};

interface SidebarIconProps {
  icon: JSX.Element;
  text?: string;
  isactive: boolean;
  onClick: () => void;
}

const SidebarIcon = ({ icon, text, onClick, isactive }: SidebarIconProps) => {
  return (
    <>
      <div className="flex justify-center" onClick={onClick}>
        <div
          className={`sidebar-element group ${
            isactive ? "bg-tertiary" : "bg-secondary"
          }`}
        >
          <div
            className="
            transition-all
            scale-75 group-hover:scale-100
            ease-in-out
            "
          >
            {icon}
          </div>
          <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
