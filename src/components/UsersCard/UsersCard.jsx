import React from "react";
import PropTypes from "prop-types";

const UsersCard = ({ user: { avatar_url, login, html_url } }) => {
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
};

UsersCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UsersCard;
