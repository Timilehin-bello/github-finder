import React, { Component } from "react";
import { UsersCard } from "../componentsIndex";

class Users extends Component {
  render() {
    return (
      <div style={userStyling}>
        {this.props.users.map((user) => (
          <UsersCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyling = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
