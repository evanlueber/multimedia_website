import React from "react";
import Navigation from "../Components/Navigation";

const Offers = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="title">
        <h1>Unsere Angebote</h1>
      </div>
      <div className="pageContent">
        <div className="firstContainer">
          <h2>Öffnungszeiten</h2>
          <ol className="opening">
            <li>Montag: 07:00 - 19:00</li>
            <li>Dienstag: 07:00 - 19:00</li>
            <li>Mittwoch: 07:00 - 19:00</li>
            <li>Donnerstag: 07:00 - 19:00</li>
            <li>Samstag: 08:00 - 18:00</li>
            <li>Sonntag: 08:00 - 18:00</li>
          </ol>
        </div>
        <div className="secondContainer">
          <h2>Eintrittspreise</h2>
          <ol className="offersList">
            <li>Freier Eintritt</li>
            <li>Keine Hunde</li>
          </ol>
          <p className="entryText">
            Der Botanische Garten ist nicht als Spielplatz geeignet, da überall
            wertvolle und seltene Pflanzen wachsen. Das Herumrennen auf den
            kleinen Wegen ist nicht gestattet. Kinder unter 12 Jahren müssen
            immer in Begleitung Erwachsener sein.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
