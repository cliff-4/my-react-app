import { useState } from "react";

let buttonTypes = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
let currButtonType = 0;

function ChangingButton() {
  const [buttonType, updateButtonType] = useState(buttonTypes[currButtonType]);

  const buttonUpdateHandler = () => {
    currButtonType = (currButtonType + 1) % buttonTypes.length;
    updateButtonType(buttonTypes[currButtonType]);
    console.log(`Current button type is ${buttonTypes[currButtonType]}`);
  };

  return (
    <>
      <button
        type="button"
        className={`btn btn-${buttonType}`}
        onClick={buttonUpdateHandler}
      >
        Click me!
      </button>
    </>
  );
}

export default ChangingButton;
