import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <a href="/">
          {icon} {title}
        </a>
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Search",
  icon: <RxGithubLogo />,
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Navbar;
