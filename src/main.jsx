import React from "react";
import pista from "./pista.jpeg";
import raisin from "./raisin.jpeg";
// import nuts from "./nuts.jpg"
import walnuts from "./walnuts.jpeg";
import money from "./money.png";
import quote from "./quote.png";
import moneyimg from "./money2.jpeg";

const styles = {
  container: {
    backgroundColor: "lightblue",
    display: "grid",
    gridTemplateColumns: "repeat(3, 80px)",
    // alignContent:"space-evenly",
    gap: " 60px",
    padding: "100px",
    justifyContent: "space-evenly",
  },
  img: {
    height: "150px",
    width: "150px",
    // backgroundColor:"lightblue"
  },
};
class Main extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={pista} alt="pista" style={styles.img} />
        <img src={raisin} alt="raisin dry fruit" style={styles.img} />
        <img src={walnuts} alt="walnuts dry fruit" style={styles.img} />
        <img src={money} alt="money" style={styles.img} />
        <img src={quote} alt="quote" style={styles.img} />
        <img src={moneyimg} alt="money img" style={styles.img} />
      </div>
    );
  }
}

export default Main;
