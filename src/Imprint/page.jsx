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
        <div className="addressContainer">
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
        <div className="arrivalContainer">
          <h2>Anfahrt</h2>
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10809.710894914764!2d8.537469523820837!3d47.36456983677209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa749a2e9c621%3A0xb15b2441c5c23f1!2sBotanischer%20Garten%20der%20Universit%C3%A4t%20Z%C3%BCrich!5e0!3m2!1sde!2sch!4v1688077203937!5m2!1sde!2sch" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
