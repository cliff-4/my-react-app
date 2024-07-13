import { ReactNode } from "react";

interface AlretProp {
  children: ReactNode;
}

const Alert = ({ children }: AlretProp) => {
  return <div className="alert alert-info">{children}</div>;
};

export default Alert;
