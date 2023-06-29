import React from "react";
import Navigation from "../Components/Navigation";
import { AiOutlineInstagram } from "react-icons/ai";

const Imprint = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="title">
        <h1>Impressum</h1>
      </div>
      <div className="pageContent">
        <div className="firstContainer">
          <h2>Adresse</h2>
          <ol className="addressList">
            <li>Botanischer Garten Universität Zurüch</li>
            <li>Zollikerstrasse 107</li>
            <li>8008 Zürich</li>
            <div className="redirect">
                <a className="uzhSiteImprint" href="https://www.bg.uzh.ch/de.html">
                  Botanischer Garten UZH
                </a>
                <a className="instagram" href="https://www.instagram.com/botanischer_garten_zurich/"><AiOutlineInstagram size={30}/></a>
            </div>
          </ol>
        </div>
        <div className="secondContainer">
          <h2>Anfahrt</h2>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
