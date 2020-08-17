import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

function Navbar({ title }) {
  return (
    <IconContext.Provider value={{ verticalAlign: "middle" }}>
      <nav className="navbar bg-primary">
        <h1>
          <FaGithub />
          {title}
        </h1>
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
