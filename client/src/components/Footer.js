import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className={`footer`}>
      <p className="footerItem copyright">&copy; Copyright</p>
      <p className="footerItem footer-address">
        enSURE<br></br>151 Ponsonby Road<br></br>Auckland 1011
      </p>
      <Link to="/privacy-policy" className="footerItem footer-privacy">
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
