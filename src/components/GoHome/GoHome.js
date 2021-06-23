import React, { Component } from "react";
import { withRouter } from "react-router";
import homeIconWhite from "./../../assets/home_white.png";
import homeIconBlack from "./../../assets/home_black.png";
import "./GoHome.css";

//This component is only to teach you progmatic navigation
class GoHome extends Component {
  navigateToHome = () => {
    const { history } = this.props;
    history.push("/");
  };
  render() {
    const { location } = this.props;
    var homeIcon = location.pathname === "/" ? homeIconBlack : homeIconWhite;
    const inHome = location.pathname === "/";
    return (
      <button
        className={`go-home-btn ${inHome ? "white-bkg" : "gradient-bkg"}`}
        onClick={this.navigateToHome}
      >
        <img className="home-icon" src={homeIcon} alt="home-icon" />
      </button>
    );
  }
}

export default withRouter(GoHome);
