// import { Component } from "react";
const styles = {
  container1: {
    backgroundColor: "lightpink",
  },
  // ul:{
  //     display:"flex",
  //     flexDirection:"column",
  //     justifyContent:"spce-evenly"

  // }
  ul: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    margin: 0, // Removes default margin
    listStyleType: "none",
    justifyContent: "flex-end",
  },
};
function Header() {
  return (
    <div style={styles.container1}>
      <ul style={styles.ul}>
        <li>Home</li>
        <li>Contactus</li>
        <li>Log-in</li>
        <li>Aboutus</li>
      </ul>
    </div>
  );
}
export default Header;
