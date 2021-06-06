import React from "react";
import "./styles.css";

function Footer() {
  var date = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {date}</p>
    </footer>
  );
}

export default Footer;
