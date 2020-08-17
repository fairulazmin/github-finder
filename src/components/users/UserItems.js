import React from "react";
import PropTypes from "prop-types";

function UserItems({ user: { avatar_url, login, html_url } }) {
  return (
    <div className="col mb-4">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src={avatar_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <a href={html_url} className="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </div>
  );
}

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
