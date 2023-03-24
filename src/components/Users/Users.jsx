import React from "react";
import { UsersCard } from "../componentsIndex";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  return (
    <div style={userStyling}>
      {loading ? (
        <Loader />
      ) : (
        users.map((user) => <UsersCard key={user.id} user={user} />)
      )}
    </div>
  );
};

const userStyling = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
