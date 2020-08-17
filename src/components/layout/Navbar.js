import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <IconContext.Provider value={{ verticalAlign: "middle" }}>
      <nav className="navbar bg-primary">
        <h1>
          <FaGithub />
          {title}
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
