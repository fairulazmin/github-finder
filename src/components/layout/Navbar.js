import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <IconContext.Provider
      value={{
        verticalAlign: "middle",
        color: "white",
      }}
    >
      <nav className="navbar bg-primary">
        <h1 style={{ color: "white" }}>
          <FaGithub className="mr-2" />
          {title}
        </h1>
        <ul className="d-flex" style={{ listStyle: "none" }}>
          <li>
            <Link to="/" className="bg-light m-2 py-2 px-4">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="bg-light m-2 py-2 px-4">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

// Provide default props value if not given
/*   Navbar.defaultProps = {
    title: 'Github Finder',
    icon: FaGithub
  } */

//  Faultcheck
/* Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  } */

export default Navbar;
