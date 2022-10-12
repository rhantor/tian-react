import React from "react";
import { logoFooter } from "../../../constants/images";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <div className="logo-footer">
              <img src={logoFooter} alt="tian" />
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <p>
              221B Baker Street <br /> Park Road, USA
            </p>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <p>
              <a href="mailto:hello@tian.com">hello@tian.com</a>
              <br />
              <a href="tel:+498755639987">+49875 563 99 87</a>
            </p>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-12">
            <p>
              © 2022 by Themesvila.<br /> All Rights Reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
