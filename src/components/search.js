import React from "react";
class Search extends React.Component {
  render() {
    return (
      <div className="search">
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
