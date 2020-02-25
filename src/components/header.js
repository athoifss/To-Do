import React from "react";
import Search from "./search";

const Header = props => {
  return (
    <div className="header">
      <Search searchChangeHandler={props.searchChangeHandler} />
    </div>
  );
};

export default Header;
