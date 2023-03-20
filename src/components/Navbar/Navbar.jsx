import React, { Component } from "react";
import { RxGithubLogo } from "react-icons/rx";
import PropTypes from "prop-types";

export class Navbar extends Component {
  static defaultProps = {
    title: "Github Search",
    icon: <RxGithubLogo />,
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <a href="/">
            {this.props.icon} {this.props.title}
          </a>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
