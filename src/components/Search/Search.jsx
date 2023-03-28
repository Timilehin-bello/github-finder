import React, { Component } from "react";

class Search extends Component {
  state = { text: "" };

  onSearchChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    // console.log(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search for Users"
          value={this.state.text}
          onChange={this.onSearchChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          disabled={!this.state.text}
        />
      </form>
    );
  }
}

export default Search;
