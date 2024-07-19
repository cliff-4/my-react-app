import { Pages } from "./Pages";

interface SidebarProps {
  pageSetter: (index: number) => void;
  activeIndex?: number;
}

const Sidebar = ({ pageSetter, activeIndex }: SidebarProps) => {
  return (
    <div className="sidebar">
      {Pages.map((page, index) => (
        <SidebarIcon
          icon={page.icon}
          text={page.tooltip}
          isactive={activeIndex === index}
          onClick={() => pageSetter(index)}
          key={index}
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
  key: number;
}

const SidebarIcon = ({ icon, text, onClick, isactive }: SidebarIconProps) => {
  return (
    <>
      <div className="flex justify-center grow md:grow-0" onClick={onClick}>
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
