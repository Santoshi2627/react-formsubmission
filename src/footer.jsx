
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const styles = {
  footer: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: "5px",
  },

  text: {
    margin: 0,
  },
};

class Footer extends React.Component {
  render() {
    return (
      <div style={styles.footer}>
        <p style={styles.text}>Contact Us on:</p>
        <a href="https://wa.me/123456789" target="_blank">
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            style={{ color: "green" }}
          />
        </a>
        <a href="https://twitter.com/santoshi">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.instagram.com/chotapackage_2627">
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            style={{ color: "darkpink" }}
          />
        </a>
      </div>
    );
  }
}

export default Footer;
