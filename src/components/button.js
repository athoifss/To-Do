import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/context";

const Button = props => {
  const buttonContext = useContext(AppContext);
  console.log("buttonContext");
  console.log(buttonContext);
  const [buttonContent, setButtonContent] = useState(
    buttonContext.addButtonContent
  );

  useEffect(() => {
    console.log("button mounted");
  });

  return (
    <button onClick={buttonContext.switchInputClass} className="button">
      {buttonContent}
    </button>
  );
};

export default Button;
