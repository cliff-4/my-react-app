import { ReactNode, useState } from "react";
import Alert from "./Alert";

interface AlertButtonProps {
  children?: ReactNode;
}

function AlertButton({ children = <>Default text</> }: AlertButtonProps) {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          {children}
        </Alert>
      )}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Hello there!
      </button>
    </>
  );
}

export default AlertButton;
