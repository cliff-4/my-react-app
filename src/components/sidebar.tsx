import { Fa1, Fa2, Fa3, Fa4, Fa5 } from "react-icons/fa6";

const defaultIconSize = 24;
const sideBarElements = [
  <Fa1 size={defaultIconSize} />,
  <Fa2 size={defaultIconSize} />,
  <Fa3 size={defaultIconSize} />,
  <Fa4 size={defaultIconSize} />,
  <Fa5 size={defaultIconSize} />,
];

interface SidebarProps {
  pageSetter: (index: number) => void;
}

const Sidebar = ({ pageSetter }: SidebarProps) => {
  return (
    <div className="sidebar">
      {sideBarElements.map((icon, index) => (
        <SidebarIcon
          icon={icon}
          text={`Tool tip ${index + 1}`}
          onClick={() => pageSetter(index)}
        />
      ))}
    </div>
  );
};

interface SidebarIconProps {
  icon: JSX.Element;
  text?: string;
  onClick: () => void;
}

const SidebarIcon = ({ icon, text, onClick }: SidebarIconProps) => {
  return (
    <>
      <div className="flex justify-center" onClick={onClick}>
        <div className="sidebar-element group">
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
