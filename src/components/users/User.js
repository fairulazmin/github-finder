import React, { Fragment, Component } from "react";
import Spinner from "../layout/Spinner";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: propTypes.bool,
    user: propTypes.object.isRequired,
    getUser: propTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-dark">
          Back to search
        </Link>
        Hirerable:{" "}
        {hireable ? (
          <FaCheck style={{ color: "green" }} />
        ) : (
          <FaTimesCircle style={{ color: "red" }} />
        )}
      </Fragment>
    );
  }
}

export default User;
