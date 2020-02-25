import React from "react";
import { useHistory } from "react-router-dom";

let NavigateButton = props => {
  let history = useHistory();
  function navigateTo(route) {
    console.log("aaah");
    history.push(route);
  }
  return (
    <div>
      <button onClick={navigateTo.bind(this, props.route)}>
        Log the fuck in
      </button>
    </div>
  );
};

export default NavigateButton;
