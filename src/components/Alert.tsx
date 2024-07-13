import { ReactNode } from "react";

interface AlretProp {
  children: ReactNode;
  onClose: () => void;
}

let alertTypes = [
  "light",
  "dark",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
];

const Alert = ({ children, onClose }: AlretProp) => {
  return (
    <div
      className={`alert alert-${alertTypes[2]} alert-dismissible`}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
