
import { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

class Toggle extends Component {
  constructor() {
    super();
    this.state = { isOn: true }; // Initialize state as true (light is on)
    this.handleButton1 = this.handleButton1.bind(this);
  }

  handleButton1() {
    this.setState({ isOn: !this.state.isOn }); // Toggle the state
  }

    render() {
    const bulbimg = this.state.isOn ? "https://www.w3schools.com/js/pic_bulboff.gif" : "https://www.w3schools.com/js/pic_bulbon.gif"; // Set color based on isOn state

    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button onClick={this.handleButton1}>
          {this.state.isOn ? <h1>SWITCH OFF</h1> : <h1>SWITCH ON</h1>}
        </button>
        <h1
          onClick={this.handleButton1}
          style={{
            // Color: bulbColor, 
            height: "120px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%", // Circle shape
          }}
        >
          {/* <FontAwesomeIcon icon={faLightbulb} size="3x" /> */}
          <img id="myImage"  src={bulbimg} width="100" height="180" alt="bulbimage"/>
        </h1>
        <button>
          <h1>{this.state.isOn ? "please turned on light" : "turned off the light"}</h1>
        </button>
      </div>
    );
  }
}

export default Toggle;
