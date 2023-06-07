import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigationBlur">
      <div className="navigationBar">
        <div className="navItem">
            <Link to="/">
                  <p className="navItemText">Home</p>
            </Link>
        </div>
        <div className="navItem">
            <Link to="/Offers">
                  <p className="navItemText">Angebote</p>
            </Link>
        </div>
        <div className="navItem">
            <Link to="/About">
                  <p className="navItemText">Über mich</p>
            </Link>
        </div>
        <div className="navItem">
            <Link to="/Contact">
                  <p className="navItemText">Kontakt</p>
            </Link>
        </div>
        <div className="navItem">
            <Link to="/Imprint">
                  <p className="navItemText">Impressum</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
