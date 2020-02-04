import React from "react";
import "../css/search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <form>
          <input
            placeholder="Search..."
            onChange={this.props.searchChangeHandler}
            name="search-bar"
          />
        </form>
      </div>
    );
  }
}

export default Search;
