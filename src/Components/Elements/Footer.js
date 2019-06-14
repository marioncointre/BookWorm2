import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import logo from "../../assets/images/open-book_w.svg";

function Footer() {
  return (
    <footer>
      <div className="footer__nav">
        <p className="footer__text">
          <Link to="/subscriptions">Subscription Plans</Link>
        </p>
        <p className="footer__text">
          <Link to="/about">About Us</Link>
        </p>
        <p className="footer__text">
          <Link to="/contact">Contact Us</Link>
        </p>
      </div>
      <div className="footer__icons">
        <ul>
          <li>
            <img src={facebook} alt="Facebook" width="40px" />
          </li>
          <li>
            <img src={twitter} alt="Twitter" width="40px" />
          </li>
          <li>
            <img src={instagram} alt="Instagram" width="40px" />
          </li>
        </ul>
      </div>
      <div className="footer__logo">
        <img className="footer__logo" src={logo} alt="Bookworm" width="40px" />
      </div>
      <p className="footer__copyright">
        Copyright BookWorm ©2019 All Rights Reserved
      </p>
    </footer>
  );
}
export default Footer;
