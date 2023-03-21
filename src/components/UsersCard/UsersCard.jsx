import React, { Component } from "react";

class UsersCard extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="UserImage"
          style={{ width: "60px" }}
          className="round-img"
        />
        <h3>{login}</h3>
        <div>
          <a
            href={html_url}
            className="btn btn-dark btn-sm my-1"
            target="_blank"
            rel="noreferrer"
          >
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UsersCard;
