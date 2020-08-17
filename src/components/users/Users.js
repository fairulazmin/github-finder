import React from "react";
import UserItems from "./UserItems";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

function Users({ users, loading }) {
  if (loading) {
    return <Spinner className="spinner-border" />;
  } else {
    return (
      <div className="row row-cols-l-2 row-cols-xl-5">
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
