import React from "react";
import Search from "./search";
import "../css/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Search searchChangeHandler={this.props.searchChangeHandler} />
      </div>
    );
  }
}

export default Header;
