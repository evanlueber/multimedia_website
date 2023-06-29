import React from "react";
import Navigation from "../Components/Navigation";

const About = () => {
  return (
    <div className="page">
      <Navigation />
      <div className="aboutTitleBlur">
        <div className="aboutTitle">
          <h1>Über uns</h1>
        </div>
      </div>
      <div className="aboutContentBlur">
        <div className="aboutContentContainer">
          <div className="aboutContent">
              <h2>Autor</h2>
              <p>
                Mein Name ist Evan Lüber und ich bin Schüler an der Kantonschule Büelrain Winterhur, an der ich mache dort die Ausbildung der Informatikmittelschule. Ich bin Programmierer, bin jedoch nicht nur informativ interessiert, sondern mache auch viel Sport.
              </p>
          </div>
          <div className="aboutMidContent">
              <h2>Botanischer Garten</h2>
              <p>
                In einem Botanischen Garten findet man die schönsten und exotischsten Pflanzen, die es auf der Welt gibt. Wenn Sie also eine Pflanze suchen, die Sie noch nie gesehen haben, ist der Botanische Garten der richtige Ort für Sie.
              </p>
          </div>
          <div className="aboutContent">
              <h2>Ziel dieser Seite</h2>
              <p>
                Das Ziel dieser Website ist es, ein paar der wundervollen Pflanzen zu präsentieren und unteranderem meine Programmierfähigkeiten weiter zuentwickeln. Ausserdem konnte ich durch das Bearbeiten der Bilder meine Kompetenz im Thema Bilderbearbeitung steigern.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
