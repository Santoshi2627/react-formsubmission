import React from "react";
// import "./headerstylesheet.css";

class PortfolioHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>SANTOSHI MOYYA</h2>
        <div>
          {/* Hidden Checkbox for toggling the menu */}
          {/* <input type="checkbox" id="menu-toggle" className="menu-toggle" /> */}

          {/* Hamburger Icon */}
          {/* <label htmlFor="menu-toggle" className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </label> */}

          {/* Navigation menu */}
          <ul>
            <li><a href="#main">Home</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PortfolioHeader;
