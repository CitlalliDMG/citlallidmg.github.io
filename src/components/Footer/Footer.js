import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="pt-3 footer">
      <div className="container">
        <p className="license">
          Ana Citlalli Del Moral Guerrero,
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
            className="ml-1 mr-1"
          >
            <i className="fab fa-creative-commons" />{" "}
            <i className="fab fa-creative-commons-by" />{" "}
            <i className="fab fa-creative-commons-nc" />{" "}
            <i className="fab fa-creative-commons-nd" />
          </a>
          2018
        </p>
      </div>
    </footer>
  );
};

export default Footer;
