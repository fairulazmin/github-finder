import React, { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  static propTypes = {
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showUsers: propTypes.bool.isRequired,
    setAlert: propTypes.func.isRequired,
  };

  render() {
    const { showUsers, clearUsers } = this.props;
    return (
      <div>
        <form action="#" className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="input-group my-3"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            className="btn btn-primary btn-block mb-3"
            value="Search"
          />
          {showUsers && (
            <button
              className="btn btn-secondary btn-block mb-3"
              onClick={clearUsers}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "warning");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
}

export default Search;
