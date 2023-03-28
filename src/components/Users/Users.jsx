import React, { Fragment } from "react";
import { UsersCard } from "../componentsIndex";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";

const Users = ({ users, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div style={userStyling}>
          {users.map((user) => (
            <UsersCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </Fragment>
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
