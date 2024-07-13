import { ReactNode, useState } from "react";

interface AlretProp {
  children: ReactNode;
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
let currAlertType = 0;

const Alert = ({ children }: AlretProp) => {
  const [alertType, setAlertType] = useState(alertTypes[currAlertType]);

  const alertUpdateHandler = () => {
    currAlertType = (currAlertType + 1) % alertTypes.length;
    setAlertType(alertTypes[currAlertType]);
  };

  return (
    <div className={`alert alert-${alertType}`} onClick={alertUpdateHandler}>
      {children}
    </div>
  );
};

export default Alert;
