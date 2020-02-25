import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/context";

const InputTask = props => {
  const classList = useContext(AppContext).inputTaskClass;
  const [classNames, setClassNames] = useState(classList);

  useEffect(() => {
    console.log(`input task mounted`);
    console.log(classList);
    setClassNames(classNames.join(" "));
  }, []);

  return (
    <div className={classNames}>
      <form>
        <input name="title" />
        <input name="subtitle" />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default InputTask;
