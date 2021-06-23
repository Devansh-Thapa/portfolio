import React from "react";
import "./NavBar.css";
import { slide as Menu } from "react-burger-menu";
import { Link, withRouter } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    const { location } = this.props;
    const homeClass = location.pathname === "/" ? "active-item" : "";
    const aboutClass = location.pathname === "/about" ? "active-item" : "";
    const skillClass = location.pathname === "/skills" ? "active-item" : "";
    const projectClass = location.pathname === "/projects" ? "active-item" : "";
    const contactClass = location.pathname === "/contact" ? "active-item" : "";
    return (
      <Menu>
        {/* We never want ot use <a> tag in our react router*/}
        {/* <a id="home" href="/" className="menu-item">
          Home
        </a> */}
        <Link to="/" className={`menu-item ${homeClass}`}>
          Home
        </Link>
        <Link to="/about" className={`menu-item ${aboutClass}`}>
          About
        </Link>
        <Link to="/skills" className={`menu-item ${skillClass}`}>
          Skills
        </Link>
        <Link to="/projects" className={`menu-item ${projectClass}`}>
          Projects
        </Link>
        <Link to="/contact" className={`menu-item ${contactClass}`}>
          Contact
        </Link>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
